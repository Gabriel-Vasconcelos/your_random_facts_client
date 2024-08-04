import { Bookmark } from "lucide-react";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { toast } from "sonner";
import { Input } from "./components/ui/input";
import Fact from "./types/Fact";

function App() {
  const [factDay, setFactDay] = useState<string | null>("Random Fact of The Day");
  const [factRandom, setFactRandom] = useState<Fact | null>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  // Requisição GET para pegar o fato do dia
  const fetchFactDay = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/facts/today");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFactDay(data.text);
    } catch (error) {
      console.error("Error Fetch Fact of the Day: ", error);
    }
  };

  // Requisição GET para pegar um fato aleatório
  const fetchFactRandom = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/facts/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFactRandom(data);
    } catch (error) {
      console.error("Error Fetch Random Fact: ", error);
    }
  };

  // Requisição POST para salvar um fato
  const fetchSaveFact = async () => {
    const username = usernameRef.current?.value;
    const fact = factRandom;

    try {
      const response = await fetch("http://127.0.0.1:5000/facts/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, fact }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();

      toast("Saved Fact", {
        description: "Fact saved without problems :)"
      })

      if (usernameRef.current) usernameRef.current.value = "";

      console.log("Fact saved successfully:", data);
    } catch (error) {
      if (error instanceof Error) {
        toast("An error occurred", {
          description: error.message || "An unexpected error occurred"
        });
        console.error("Error Fetch Save Fact:", error);
      } else {
        toast("An error occurred", {
          description: "An unexpected error occurred"
        });
        console.error("Error Fetch Save Fact:", "An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    fetchFactDay();
  }, [])

  return (
    <div className="relative">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32 space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            {factDay}
          </h1>
          <p className="mx-auto max-w-[700px] mt-14 mb-5 text-muted-foreground md:text-xl">
            Click the button below to generate a random fact and save it to your collection.
          </p>
          <Button
            onClick={() => fetchFactRandom()}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Generate Random Fact
          </Button>
        </div>

        {factRandom && (
          <Card className="relative max-w-xl mx-auto">
            <CardContent className="p-6 space-y-4">
              <p>{factRandom.text}</p>
            </CardContent>
            <CardFooter className="px-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground ml-auto">
                    <Bookmark />
                    <span className="sr-only">Save</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Save Fact</DialogTitle>
                    <DialogDescription>
                      Provide your username to save the fact. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Username
                      </Label>
                      <Input id="name" ref={usernameRef} placeholder="tony_stark1" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => {
                        if (usernameRef.current?.value) {
                          fetchSaveFact();
                        } else {
                          toast("Fact not saved", {
                            description: "Fill in the fields to save a fact"
                          })
                        }
                      }}
                      type="submit"
                    >
                      Save Fact
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        )}

      </main>
    </div>
  );
}

export default App;
