import { Model, Optional } from "sequelize";
interface TransactionAttributes {
    id: number;
    amount: number;
    type: string;
    status: string;
    paymentMethod: string;
    clientId: number;
    serviceId: number;
    clinicId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface TransactionCreationAttributes extends Optional<TransactionAttributes, "id"> {
}
declare class Transaction extends Model<TransactionAttributes, TransactionCreationAttributes> implements TransactionAttributes {
    id: number;
    amount: number;
    type: string;
    status: string;
    paymentMethod: string;
    clientId: number;
    serviceId: number;
    clinicId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Transaction;
//# sourceMappingURL=Transaction.d.ts.map