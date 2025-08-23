import { Model, Optional } from "sequelize";
interface PaymentAttributes {
    id: number;
    amount: number;
    currency: string;
    status: string;
    method: string;
    transactionId: string;
    userId: number;
    licenseId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface PaymentCreationAttributes extends Optional<PaymentAttributes, "id"> {
}
declare class Payment extends Model<PaymentAttributes, PaymentCreationAttributes> implements PaymentAttributes {
    id: number;
    amount: number;
    currency: string;
    status: string;
    method: string;
    transactionId: string;
    userId: number;
    licenseId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Payment;
//# sourceMappingURL=Payment.d.ts.map