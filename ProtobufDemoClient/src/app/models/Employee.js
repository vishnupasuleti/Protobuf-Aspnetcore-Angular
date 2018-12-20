/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Employee = (function() {

    /**
     * Properties of an Employee.
     * @exports IEmployee
     * @interface IEmployee
     * @property {string|null} [FirstName] Employee FirstName
     * @property {string|null} [LastName] Employee LastName
     * @property {string|null} [FootballClub] Employee FootballClub
     * @property {string|null} [Position] Employee Position
     * @property {string|null} [Country] Employee Country
     * @property {number|null} [Age] Employee Age
     */

    /**
     * Constructs a new Employee.
     * @exports Employee
     * @classdesc Represents an Employee.
     * @implements IEmployee
     * @constructor
     * @param {IEmployee=} [properties] Properties to set
     */
    function Employee(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Employee FirstName.
     * @member {string} FirstName
     * @memberof Employee
     * @instance
     */
    Employee.prototype.FirstName = "";

    /**
     * Employee LastName.
     * @member {string} LastName
     * @memberof Employee
     * @instance
     */
    Employee.prototype.LastName = "";

    /**
     * Employee FootballClub.
     * @member {string} FootballClub
     * @memberof Employee
     * @instance
     */
    Employee.prototype.FootballClub = "";

    /**
     * Employee Position.
     * @member {string} Position
     * @memberof Employee
     * @instance
     */
    Employee.prototype.Position = "";

    /**
     * Employee Country.
     * @member {string} Country
     * @memberof Employee
     * @instance
     */
    Employee.prototype.Country = "";

    /**
     * Employee Age.
     * @member {number} Age
     * @memberof Employee
     * @instance
     */
    Employee.prototype.Age = 0;

    /**
     * Creates a new Employee instance using the specified properties.
     * @function create
     * @memberof Employee
     * @static
     * @param {IEmployee=} [properties] Properties to set
     * @returns {Employee} Employee instance
     */
    Employee.create = function create(properties) {
        return new Employee(properties);
    };

    /**
     * Encodes the specified Employee message. Does not implicitly {@link Employee.verify|verify} messages.
     * @function encode
     * @memberof Employee
     * @static
     * @param {IEmployee} message Employee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Employee.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.FirstName != null && message.hasOwnProperty("FirstName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.FirstName);
        if (message.LastName != null && message.hasOwnProperty("LastName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.LastName);
        if (message.FootballClub != null && message.hasOwnProperty("FootballClub"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.FootballClub);
        if (message.Position != null && message.hasOwnProperty("Position"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Position);
        if (message.Country != null && message.hasOwnProperty("Country"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Country);
        if (message.Age != null && message.hasOwnProperty("Age"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Age);
        return writer;
    };

    /**
     * Encodes the specified Employee message, length delimited. Does not implicitly {@link Employee.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Employee
     * @static
     * @param {IEmployee} message Employee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Employee.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Employee message from the specified reader or buffer.
     * @function decode
     * @memberof Employee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Employee} Employee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Employee.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Employee();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.FirstName = reader.string();
                break;
            case 2:
                message.LastName = reader.string();
                break;
            case 3:
                message.FootballClub = reader.string();
                break;
            case 4:
                message.Position = reader.string();
                break;
            case 5:
                message.Country = reader.string();
                break;
            case 6:
                message.Age = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Employee message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Employee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Employee} Employee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Employee.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Employee message.
     * @function verify
     * @memberof Employee
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Employee.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.FirstName != null && message.hasOwnProperty("FirstName"))
            if (!$util.isString(message.FirstName))
                return "FirstName: string expected";
        if (message.LastName != null && message.hasOwnProperty("LastName"))
            if (!$util.isString(message.LastName))
                return "LastName: string expected";
        if (message.FootballClub != null && message.hasOwnProperty("FootballClub"))
            if (!$util.isString(message.FootballClub))
                return "FootballClub: string expected";
        if (message.Position != null && message.hasOwnProperty("Position"))
            if (!$util.isString(message.Position))
                return "Position: string expected";
        if (message.Country != null && message.hasOwnProperty("Country"))
            if (!$util.isString(message.Country))
                return "Country: string expected";
        if (message.Age != null && message.hasOwnProperty("Age"))
            if (!$util.isInteger(message.Age))
                return "Age: integer expected";
        return null;
    };

    /**
     * Creates an Employee message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Employee
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Employee} Employee
     */
    Employee.fromObject = function fromObject(object) {
        if (object instanceof $root.Employee)
            return object;
        var message = new $root.Employee();
        if (object.FirstName != null)
            message.FirstName = String(object.FirstName);
        if (object.LastName != null)
            message.LastName = String(object.LastName);
        if (object.FootballClub != null)
            message.FootballClub = String(object.FootballClub);
        if (object.Position != null)
            message.Position = String(object.Position);
        if (object.Country != null)
            message.Country = String(object.Country);
        if (object.Age != null)
            message.Age = object.Age | 0;
        return message;
    };

    /**
     * Creates a plain object from an Employee message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Employee
     * @static
     * @param {Employee} message Employee
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Employee.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.FirstName = "";
            object.LastName = "";
            object.FootballClub = "";
            object.Position = "";
            object.Country = "";
            object.Age = 0;
        }
        if (message.FirstName != null && message.hasOwnProperty("FirstName"))
            object.FirstName = message.FirstName;
        if (message.LastName != null && message.hasOwnProperty("LastName"))
            object.LastName = message.LastName;
        if (message.FootballClub != null && message.hasOwnProperty("FootballClub"))
            object.FootballClub = message.FootballClub;
        if (message.Position != null && message.hasOwnProperty("Position"))
            object.Position = message.Position;
        if (message.Country != null && message.hasOwnProperty("Country"))
            object.Country = message.Country;
        if (message.Age != null && message.hasOwnProperty("Age"))
            object.Age = message.Age;
        return object;
    };

    /**
     * Converts this Employee to JSON.
     * @function toJSON
     * @memberof Employee
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Employee.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Employee;
})();

$root.EmployeeCollection = (function() {

    /**
     * Properties of an EmployeeCollection.
     * @exports IEmployeeCollection
     * @interface IEmployeeCollection
     * @property {Array.<IEmployee>|null} [Employees] EmployeeCollection Employees
     */

    /**
     * Constructs a new EmployeeCollection.
     * @exports EmployeeCollection
     * @classdesc Represents an EmployeeCollection.
     * @implements IEmployeeCollection
     * @constructor
     * @param {IEmployeeCollection=} [properties] Properties to set
     */
    function EmployeeCollection(properties) {
        this.Employees = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EmployeeCollection Employees.
     * @member {Array.<IEmployee>} Employees
     * @memberof EmployeeCollection
     * @instance
     */
    EmployeeCollection.prototype.Employees = $util.emptyArray;

    /**
     * Creates a new EmployeeCollection instance using the specified properties.
     * @function create
     * @memberof EmployeeCollection
     * @static
     * @param {IEmployeeCollection=} [properties] Properties to set
     * @returns {EmployeeCollection} EmployeeCollection instance
     */
    EmployeeCollection.create = function create(properties) {
        return new EmployeeCollection(properties);
    };

    /**
     * Encodes the specified EmployeeCollection message. Does not implicitly {@link EmployeeCollection.verify|verify} messages.
     * @function encode
     * @memberof EmployeeCollection
     * @static
     * @param {IEmployeeCollection} message EmployeeCollection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmployeeCollection.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Employees != null && message.Employees.length)
            for (var i = 0; i < message.Employees.length; ++i)
                $root.Employee.encode(message.Employees[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EmployeeCollection message, length delimited. Does not implicitly {@link EmployeeCollection.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmployeeCollection
     * @static
     * @param {IEmployeeCollection} message EmployeeCollection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmployeeCollection.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmployeeCollection message from the specified reader or buffer.
     * @function decode
     * @memberof EmployeeCollection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EmployeeCollection} EmployeeCollection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmployeeCollection.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EmployeeCollection();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Employees && message.Employees.length))
                    message.Employees = [];
                message.Employees.push($root.Employee.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EmployeeCollection message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmployeeCollection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmployeeCollection} EmployeeCollection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmployeeCollection.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmployeeCollection message.
     * @function verify
     * @memberof EmployeeCollection
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmployeeCollection.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Employees != null && message.hasOwnProperty("Employees")) {
            if (!Array.isArray(message.Employees))
                return "Employees: array expected";
            for (var i = 0; i < message.Employees.length; ++i) {
                var error = $root.Employee.verify(message.Employees[i]);
                if (error)
                    return "Employees." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EmployeeCollection message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EmployeeCollection
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EmployeeCollection} EmployeeCollection
     */
    EmployeeCollection.fromObject = function fromObject(object) {
        if (object instanceof $root.EmployeeCollection)
            return object;
        var message = new $root.EmployeeCollection();
        if (object.Employees) {
            if (!Array.isArray(object.Employees))
                throw TypeError(".EmployeeCollection.Employees: array expected");
            message.Employees = [];
            for (var i = 0; i < object.Employees.length; ++i) {
                if (typeof object.Employees[i] !== "object")
                    throw TypeError(".EmployeeCollection.Employees: object expected");
                message.Employees[i] = $root.Employee.fromObject(object.Employees[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an EmployeeCollection message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EmployeeCollection
     * @static
     * @param {EmployeeCollection} message EmployeeCollection
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EmployeeCollection.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Employees = [];
        if (message.Employees && message.Employees.length) {
            object.Employees = [];
            for (var j = 0; j < message.Employees.length; ++j)
                object.Employees[j] = $root.Employee.toObject(message.Employees[j], options);
        }
        return object;
    };

    /**
     * Converts this EmployeeCollection to JSON.
     * @function toJSON
     * @memberof EmployeeCollection
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EmployeeCollection.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EmployeeCollection;
})();

module.exports = $root;
