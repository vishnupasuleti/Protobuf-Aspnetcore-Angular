import * as $protobuf from "protobufjs";
/** Properties of an Employee. */
export interface IEmployee {

    /** Employee FirstName */
    FirstName?: (string|null);

    /** Employee LastName */
    LastName?: (string|null);

    /** Employee FootballClub */
    FootballClub?: (string|null);

    /** Employee Position */
    Position?: (string|null);

    /** Employee Country */
    Country?: (string|null);

    /** Employee Age */
    Age?: (number|null);
}

/** Represents an Employee. */
export class Employee implements IEmployee {

    /**
     * Constructs a new Employee.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmployee);

    /** Employee FirstName. */
    public FirstName: string;

    /** Employee LastName. */
    public LastName: string;

    /** Employee FootballClub. */
    public FootballClub: string;

    /** Employee Position. */
    public Position: string;

    /** Employee Country. */
    public Country: string;

    /** Employee Age. */
    public Age: number;

    /**
     * Creates a new Employee instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Employee instance
     */
    public static create(properties?: IEmployee): Employee;

    /**
     * Encodes the specified Employee message. Does not implicitly {@link Employee.verify|verify} messages.
     * @param message Employee message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmployee, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Employee message, length delimited. Does not implicitly {@link Employee.verify|verify} messages.
     * @param message Employee message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmployee, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Employee message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Employee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Employee;

    /**
     * Decodes an Employee message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Employee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Employee;

    /**
     * Verifies an Employee message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Employee message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Employee
     */
    public static fromObject(object: { [k: string]: any }): Employee;

    /**
     * Creates a plain object from an Employee message. Also converts values to other types if specified.
     * @param message Employee
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Employee, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Employee to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EmployeeCollection. */
export interface IEmployeeCollection {

    /** EmployeeCollection Employees */
    Employees?: (IEmployee[]|null);
}

/** Represents an EmployeeCollection. */
export class EmployeeCollection implements IEmployeeCollection {

    /**
     * Constructs a new EmployeeCollection.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmployeeCollection);

    /** EmployeeCollection Employees. */
    public Employees: IEmployee[];

    /**
     * Creates a new EmployeeCollection instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EmployeeCollection instance
     */
    public static create(properties?: IEmployeeCollection): EmployeeCollection;

    /**
     * Encodes the specified EmployeeCollection message. Does not implicitly {@link EmployeeCollection.verify|verify} messages.
     * @param message EmployeeCollection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmployeeCollection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EmployeeCollection message, length delimited. Does not implicitly {@link EmployeeCollection.verify|verify} messages.
     * @param message EmployeeCollection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmployeeCollection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EmployeeCollection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EmployeeCollection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmployeeCollection;

    /**
     * Decodes an EmployeeCollection message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EmployeeCollection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmployeeCollection;

    /**
     * Verifies an EmployeeCollection message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EmployeeCollection message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EmployeeCollection
     */
    public static fromObject(object: { [k: string]: any }): EmployeeCollection;

    /**
     * Creates a plain object from an EmployeeCollection message. Also converts values to other types if specified.
     * @param message EmployeeCollection
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EmployeeCollection, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EmployeeCollection to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
