import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

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

interface ClientCreationAttributes extends Optional<ClientAttributes, "id"> {}

class Client
  extends Model<ClientAttributes, ClientCreationAttributes>
  implements ClientAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public address!: string;
  public clinicId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    tableName: "clients",
    modelName: "Client",
    timestamps: true,
  }
);

export default Client;
