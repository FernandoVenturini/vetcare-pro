import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

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

interface PaymentCreationAttributes extends Optional<PaymentAttributes, "id"> {}

class Payment
  extends Model<PaymentAttributes, PaymentCreationAttributes>
  implements PaymentAttributes
{
  public id!: number;
  public amount!: number;
  public currency!: string;
  public status!: string;
  public method!: string;
  public transactionId!: string;
  public userId!: number;
  public licenseId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(3),
      defaultValue: "BRL",
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "failed", "refunded"),
      defaultValue: "pending",
    },
    method: {
      type: DataTypes.ENUM("credit_card", "debit_card", "pix", "bank_slip"),
      allowNull: false,
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    licenseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "licenses",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "payments",
    modelName: "Payment",
    timestamps: true,
  }
);

export default Payment;
