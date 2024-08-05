/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Fact = (function() {

    /**
     * Properties of a Fact.
     * @exports IFact
     * @interface IFact
     * @property {string|null} [id] Fact id
     * @property {string|null} [factId] Fact factId
     * @property {string|null} [language] Fact language
     * @property {string|null} [permalink] Fact permalink
     * @property {string|null} [source] Fact source
     * @property {string|null} [sourceUrl] Fact sourceUrl
     * @property {string|null} [text] Fact text
     */

    /**
     * Constructs a new Fact.
     * @exports Fact
     * @classdesc Represents a Fact.
     * @implements IFact
     * @constructor
     * @param {IFact=} [properties] Properties to set
     */
    function Fact(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Fact id.
     * @member {string} id
     * @memberof Fact
     * @instance
     */
    Fact.prototype.id = "";

    /**
     * Fact factId.
     * @member {string} factId
     * @memberof Fact
     * @instance
     */
    Fact.prototype.factId = "";

    /**
     * Fact language.
     * @member {string} language
     * @memberof Fact
     * @instance
     */
    Fact.prototype.language = "";

    /**
     * Fact permalink.
     * @member {string} permalink
     * @memberof Fact
     * @instance
     */
    Fact.prototype.permalink = "";

    /**
     * Fact source.
     * @member {string} source
     * @memberof Fact
     * @instance
     */
    Fact.prototype.source = "";

    /**
     * Fact sourceUrl.
     * @member {string} sourceUrl
     * @memberof Fact
     * @instance
     */
    Fact.prototype.sourceUrl = "";

    /**
     * Fact text.
     * @member {string} text
     * @memberof Fact
     * @instance
     */
    Fact.prototype.text = "";

    /**
     * Creates a new Fact instance using the specified properties.
     * @function create
     * @memberof Fact
     * @static
     * @param {IFact=} [properties] Properties to set
     * @returns {Fact} Fact instance
     */
    Fact.create = function create(properties) {
        return new Fact(properties);
    };

    /**
     * Encodes the specified Fact message. Does not implicitly {@link Fact.verify|verify} messages.
     * @function encode
     * @memberof Fact
     * @static
     * @param {IFact} message Fact message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Fact.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.factId != null && Object.hasOwnProperty.call(message, "factId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.factId);
        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.language);
        if (message.permalink != null && Object.hasOwnProperty.call(message, "permalink"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.permalink);
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.source);
        if (message.sourceUrl != null && Object.hasOwnProperty.call(message, "sourceUrl"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.sourceUrl);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified Fact message, length delimited. Does not implicitly {@link Fact.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Fact
     * @static
     * @param {IFact} message Fact message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Fact.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Fact message from the specified reader or buffer.
     * @function decode
     * @memberof Fact
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Fact} Fact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Fact.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Fact();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.factId = reader.string();
                break;
            case 3:
                message.language = reader.string();
                break;
            case 4:
                message.permalink = reader.string();
                break;
            case 5:
                message.source = reader.string();
                break;
            case 6:
                message.sourceUrl = reader.string();
                break;
            case 7:
                message.text = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Fact message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Fact
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Fact} Fact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Fact.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Fact message.
     * @function verify
     * @memberof Fact
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Fact.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.factId != null && message.hasOwnProperty("factId"))
            if (!$util.isString(message.factId))
                return "factId: string expected";
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isString(message.language))
                return "language: string expected";
        if (message.permalink != null && message.hasOwnProperty("permalink"))
            if (!$util.isString(message.permalink))
                return "permalink: string expected";
        if (message.source != null && message.hasOwnProperty("source"))
            if (!$util.isString(message.source))
                return "source: string expected";
        if (message.sourceUrl != null && message.hasOwnProperty("sourceUrl"))
            if (!$util.isString(message.sourceUrl))
                return "sourceUrl: string expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a Fact message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Fact
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Fact} Fact
     */
    Fact.fromObject = function fromObject(object) {
        if (object instanceof $root.Fact)
            return object;
        var message = new $root.Fact();
        if (object.id != null)
            message.id = String(object.id);
        if (object.factId != null)
            message.factId = String(object.factId);
        if (object.language != null)
            message.language = String(object.language);
        if (object.permalink != null)
            message.permalink = String(object.permalink);
        if (object.source != null)
            message.source = String(object.source);
        if (object.sourceUrl != null)
            message.sourceUrl = String(object.sourceUrl);
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a Fact message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Fact
     * @static
     * @param {Fact} message Fact
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Fact.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.factId = "";
            object.language = "";
            object.permalink = "";
            object.source = "";
            object.sourceUrl = "";
            object.text = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.factId != null && message.hasOwnProperty("factId"))
            object.factId = message.factId;
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        if (message.permalink != null && message.hasOwnProperty("permalink"))
            object.permalink = message.permalink;
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = message.source;
        if (message.sourceUrl != null && message.hasOwnProperty("sourceUrl"))
            object.sourceUrl = message.sourceUrl;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this Fact to JSON.
     * @function toJSON
     * @memberof Fact
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Fact.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Fact;
})();

$root.FactList = (function() {

    /**
     * Properties of a FactList.
     * @exports IFactList
     * @interface IFactList
     * @property {Array.<IFact>|null} [facts] FactList facts
     */

    /**
     * Constructs a new FactList.
     * @exports FactList
     * @classdesc Represents a FactList.
     * @implements IFactList
     * @constructor
     * @param {IFactList=} [properties] Properties to set
     */
    function FactList(properties) {
        this.facts = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FactList facts.
     * @member {Array.<IFact>} facts
     * @memberof FactList
     * @instance
     */
    FactList.prototype.facts = $util.emptyArray;

    /**
     * Creates a new FactList instance using the specified properties.
     * @function create
     * @memberof FactList
     * @static
     * @param {IFactList=} [properties] Properties to set
     * @returns {FactList} FactList instance
     */
    FactList.create = function create(properties) {
        return new FactList(properties);
    };

    /**
     * Encodes the specified FactList message. Does not implicitly {@link FactList.verify|verify} messages.
     * @function encode
     * @memberof FactList
     * @static
     * @param {IFactList} message FactList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FactList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.facts != null && message.facts.length)
            for (var i = 0; i < message.facts.length; ++i)
                $root.Fact.encode(message.facts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FactList message, length delimited. Does not implicitly {@link FactList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FactList
     * @static
     * @param {IFactList} message FactList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FactList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FactList message from the specified reader or buffer.
     * @function decode
     * @memberof FactList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FactList} FactList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FactList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FactList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.facts && message.facts.length))
                    message.facts = [];
                message.facts.push($root.Fact.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FactList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FactList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FactList} FactList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FactList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FactList message.
     * @function verify
     * @memberof FactList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FactList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.facts != null && message.hasOwnProperty("facts")) {
            if (!Array.isArray(message.facts))
                return "facts: array expected";
            for (var i = 0; i < message.facts.length; ++i) {
                var error = $root.Fact.verify(message.facts[i]);
                if (error)
                    return "facts." + error;
            }
        }
        return null;
    };

    /**
     * Creates a FactList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FactList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FactList} FactList
     */
    FactList.fromObject = function fromObject(object) {
        if (object instanceof $root.FactList)
            return object;
        var message = new $root.FactList();
        if (object.facts) {
            if (!Array.isArray(object.facts))
                throw TypeError(".FactList.facts: array expected");
            message.facts = [];
            for (var i = 0; i < object.facts.length; ++i) {
                if (typeof object.facts[i] !== "object")
                    throw TypeError(".FactList.facts: object expected");
                message.facts[i] = $root.Fact.fromObject(object.facts[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a FactList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FactList
     * @static
     * @param {FactList} message FactList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FactList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.facts = [];
        if (message.facts && message.facts.length) {
            object.facts = [];
            for (var j = 0; j < message.facts.length; ++j)
                object.facts[j] = $root.Fact.toObject(message.facts[j], options);
        }
        return object;
    };

    /**
     * Converts this FactList to JSON.
     * @function toJSON
     * @memberof FactList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FactList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FactList;
})();

module.exports = $root;
