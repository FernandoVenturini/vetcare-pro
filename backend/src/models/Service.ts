import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface ServiceAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  clinicId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ServiceCreationAttributes extends Optional<ServiceAttributes, "id"> {}

class Service
  extends Model<ServiceAttributes, ServiceCreationAttributes>
  implements ServiceAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public duration!: number;
  public clinicId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Service.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: "services",
    modelName: "Service",
    timestamps: true,
  }
);

export default Service;
