import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface PatientAttributes {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  clientId: number;
  clinicId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PatientCreationAttributes extends Optional<PatientAttributes, "id"> {}

class Patient
  extends Model<PatientAttributes, PatientCreationAttributes>
  implements PatientAttributes
{
  public id!: number;
  public name!: string;
  public species!: string;
  public breed!: string;
  public age!: number;
  public weight!: number;
  public clientId!: number;
  public clinicId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Patient.init(
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
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
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
    tableName: "patients",
    modelName: "Patient",
    timestamps: true,
  }
);

export default Patient;
