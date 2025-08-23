import { Model, Optional } from "sequelize";
interface ClientAttributes {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    clinicId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface ClientCreationAttributes extends Optional<ClientAttributes, "id"> {
}
declare class Client extends Model<ClientAttributes, ClientCreationAttributes> implements ClientAttributes {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    clinicId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Client;
//# sourceMappingURL=Client.d.ts.map