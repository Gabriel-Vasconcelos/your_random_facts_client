import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Trash2 } from "lucide-react";
import FactType from "@/types/Fact";
import { Fact, FactList } from "@/proto/fact_pb.d";


const Header = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [factsByUser, setFactsByUser] = useState<FactType[] | null>(null);

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (api) {
      setCount(factsByUser ? factsByUser.length : 0);
      setCurrent(1);
    }
  }, [factsByUser, api]);

  // Requisição POST para criar um novo usuário
  const fetchCreateUser = async () => {
    const name = nameRef.current?.value;
    const username = usernameRef.current?.value;

    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, name }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();

      toast("User Created", {
        description: "User created successfully."
      });

      if (nameRef.current) nameRef.current.value = "";
      if (usernameRef.current) usernameRef.current.value = "";

      console.log("User created successfully:", data);
    } catch (error) {
      if (error instanceof Error) {
        toast("An error occurred", {
          description: error.message || "An unexpected error occurred."
        });

        console.error("Error Fetch Create User:", error);
      } else {
        toast("An error occurred", {
          description: "An unexpected error occurred."
        });

        console.error("Error Fetch Create User:", "An unexpected error occurred.");
      }
    }
  };

  // Requisição GET para pegar um fato pelo usuário
  const fetchFactByUser = async () => {
    const username = usernameRef.current?.value;

    try {
      const response = await fetch(`http://127.0.0.1:5000/facts/${username}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      setFactsByUser(data);
      console.log(data)
    } catch (error) {
      setFactsByUser(null);

      if (error instanceof Error) {
        toast("An error occurred", {
          description: error.message || "An unexpected error occurred"
        });
        console.error("Error Fetch Create User:", error);
      } else {
        toast("An error occurred", {
          description: "An unexpected error occurred"
        });
        console.error("Error Fetch Search Fact:", "An unexpected error occurred");
      }
    }
  };

  // Função para buscar fatos do usuário com Protocol Buffers
  const fetchFactByUserProto = async () => {
    const username = usernameRef.current?.value;

    try {
      const response = await fetch(`http://127.0.0.1:5000/facts/proto/${username}`, {
        method: "GET",
        headers: {
          "Accept": "application/octet-stream", // O tipo de resposta esperada do servidor
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Obter o buffer da resposta
      const buffer = await response.arrayBuffer();
      const reader = new Uint8Array(buffer);

      // Decodificar a resposta usando FactList
      const factList = FactList.decode(reader);

      // Transformar FactList em array de Facts
      const facts = factList.facts.map((fact) => Fact.fromObject(fact));

      //setFactsByUser(facts);
      console.log(facts);
    } catch (error) {
      setFactsByUser(null);

      if (error instanceof Error) {
        toast("An error occurred", {
          description: error.message || "An unexpected error occurred",
        });
        console.error("Error Fetch Fact by User (Proto):", error);
      } else {
        toast("An error occurred", {
          description: "An unexpected error occurred",
        });
        console.error("Error Fetch Fact by User (Proto):", "An unexpected error occurred");
      }
    }
  };

  // Requisição DELETE para deletar um fato baseado no usuário
  const fetchDeleteFactByUser = async (id: string) => {
    const username = usernameRef.current?.value;

    try {
      const response = await fetch(`http://127.0.0.1:5000/facts/${username}/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      console.log(data);
      fetchFactByUser();
    } catch (error) {

      if (error instanceof Error) {
        toast("An error occurred", {
          description: error.message || "An unexpected error occurred"
        });
        console.error("Error Fetch Delete Fact by User:", error);
      } else {
        toast("An error occurred", {
          description: "An unexpected error occurred"
        });
        console.error("Error Fetch Delete Fact:", "An unexpected error occurred");
      }
    }
  };

  return (
    <header className="flex items-center justify-between py-6 px-8 bg-slate-800 text-white">
      <h1 className="text-2xl font-bold">Your Random Facts</h1>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mr-2">
              Create User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create User</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" ref={nameRef} placeholder="Tony Stark" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" ref={usernameRef} placeholder="tony_stark1" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={() => {
                  if (nameRef.current?.value && usernameRef.current?.value) {
                    fetchCreateUser();
                  } else {
                    toast("User not created", {
                      description: "Fill in the fields to create a user"
                    })
                  }
                }}
                type="submit"
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" onClick={() => setFactsByUser(null)} className="mr-2">
              Saved Facts
            </Button>
          </DialogTrigger>
          <DialogContent className="h-[90vh] flex flex-col sm:max-w-2xl">
            <DialogHeader className="h-10">
              <DialogTitle>Saved Facts</DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-4 py-4">
              <Label htmlFor="username" className="text-start">
                Username
              </Label>
              <Input id="username" ref={usernameRef} placeholder="tony_stark1" className="w-full" />
              <Button
                onClick={() => {
                  if (usernameRef.current?.value) {
                    fetchFactByUser();
                  } else {
                    toast("User Not Found", {
                      description: "Please enter a username to fetch facts."
                    })
                    setFactsByUser(null)
                  }
                }}
                type="submit"
              >
                Search
              </Button>
            </div>
            {factsByUser && factsByUser?.length > 0 && (
              <div className="px-10 my-auto">
                <Carousel setApi={setApi} className="w-full mx-auto">
                  <CarouselContent>
                    {factsByUser.map((fact, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <p className="text-center">{fact.text}</p>
                            </CardContent>
                            <CardFooter>
                              <Button variant="destructive" size="icon" className="ml-auto" onClick={() => fetchDeleteFactByUser(fact.fact_id)}>
                                <Trash2 />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Slide {current} of {count}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" onClick={() => setFactsByUser(null)}>
              Saved Facts Proto
            </Button>
          </DialogTrigger>
          <DialogContent className="h-[90vh] flex flex-col sm:max-w-2xl">
            <DialogHeader className="h-10">
              <DialogTitle>Saved Facts Proto</DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-4 py-4">
              <Label htmlFor="username" className="text-start">
                Username
              </Label>
              <Input id="username" ref={usernameRef} placeholder="tony_stark1" className="w-full" />
              <Button
                onClick={() => {
                  if (usernameRef.current?.value) {
                    fetchFactByUserProto();
                  } else {
                    toast("User Not Found", {
                      description: "Please enter a username to fetch facts."
                    })
                    setFactsByUser(null)
                  }
                }}
                type="submit"
              >
                Search
              </Button>
            </div>
            {factsByUser && factsByUser?.length > 0 && (
              <div className="px-10 my-auto">
                <Carousel setApi={setApi} className="w-full mx-auto">
                  <CarouselContent>
                    {factsByUser.map((fact, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <p className="text-center">{fact.text}</p>
                            </CardContent>
                            <CardFooter>
                              <Button variant="destructive" size="icon" className="ml-auto" onClick={() => fetchDeleteFactByUser(fact.fact_id)}>
                                <Trash2 />
                                <span className="sr-only">Delete</span>
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Slide {current} of {count}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

export default Header;
