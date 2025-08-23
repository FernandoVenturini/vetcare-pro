import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

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

interface TransactionCreationAttributes
  extends Optional<TransactionAttributes, "id"> {}

class Transaction
  extends Model<TransactionAttributes, TransactionCreationAttributes>
  implements TransactionAttributes
{
  public id!: number;
  public amount!: number;
  public type!: string;
  public status!: string;
  public paymentMethod!: string;
  public clientId!: number;
  public serviceId!: number;
  public clinicId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Transaction.init(
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
    type: {
      type: DataTypes.ENUM("income", "expense"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "cancelled"),
      defaultValue: "pending",
    },
    paymentMethod: {
      type: DataTypes.ENUM(
        "cash",
        "credit_card",
        "debit_card",
        "pix",
        "bank_transfer"
      ),
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clients",
        key: "id",
      },
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "services",
        key: "id",
      },
    },
    clinicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "transactions",
    modelName: "Transaction",
    timestamps: true,
  }
);

export default Transaction;
