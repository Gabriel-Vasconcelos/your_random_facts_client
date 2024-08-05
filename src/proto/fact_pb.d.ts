import * as $protobuf from "protobufjs";
/** Properties of a Fact. */
export interface IFact {

    /** Fact id */
    id?: (string|null);

    /** Fact factId */
    factId?: (string|null);

    /** Fact language */
    language?: (string|null);

    /** Fact permalink */
    permalink?: (string|null);

    /** Fact source */
    source?: (string|null);

    /** Fact sourceUrl */
    sourceUrl?: (string|null);

    /** Fact text */
    text?: (string|null);
}

/** Represents a Fact. */
export class Fact implements IFact {

    /**
     * Constructs a new Fact.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFact);

    /** Fact id. */
    public id: string;

    /** Fact factId. */
    public factId: string;

    /** Fact language. */
    public language: string;

    /** Fact permalink. */
    public permalink: string;

    /** Fact source. */
    public source: string;

    /** Fact sourceUrl. */
    public sourceUrl: string;

    /** Fact text. */
    public text: string;

    /**
     * Creates a new Fact instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Fact instance
     */
    public static create(properties?: IFact): Fact;

    /**
     * Encodes the specified Fact message. Does not implicitly {@link Fact.verify|verify} messages.
     * @param message Fact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Fact message, length delimited. Does not implicitly {@link Fact.verify|verify} messages.
     * @param message Fact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Fact message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Fact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fact;

    /**
     * Decodes a Fact message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Fact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fact;

    /**
     * Verifies a Fact message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Fact message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Fact
     */
    public static fromObject(object: { [k: string]: any }): Fact;

    /**
     * Creates a plain object from a Fact message. Also converts values to other types if specified.
     * @param message Fact
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Fact, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Fact to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FactList. */
export interface IFactList {

    /** FactList facts */
    facts?: (IFact[]|null);
}

/** Represents a FactList. */
export class FactList implements IFactList {

    /**
     * Constructs a new FactList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFactList);

    /** FactList facts. */
    public facts: IFact[];

    /**
     * Creates a new FactList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FactList instance
     */
    public static create(properties?: IFactList): FactList;

    /**
     * Encodes the specified FactList message. Does not implicitly {@link FactList.verify|verify} messages.
     * @param message FactList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFactList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FactList message, length delimited. Does not implicitly {@link FactList.verify|verify} messages.
     * @param message FactList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFactList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FactList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FactList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FactList;

    /**
     * Decodes a FactList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FactList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FactList;

    /**
     * Verifies a FactList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FactList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FactList
     */
    public static fromObject(object: { [k: string]: any }): FactList;

    /**
     * Creates a plain object from a FactList message. Also converts values to other types if specified.
     * @param message FactList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FactList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FactList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
