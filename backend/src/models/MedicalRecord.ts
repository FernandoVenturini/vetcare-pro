import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface MedicalRecordAttributes {
  id: number;
  diagnosis: string;
  treatment: string;
  notes: string;
  patientId: number;
  veterinarianId: number;
  clinicId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MedicalRecordCreationAttributes
  extends Optional<MedicalRecordAttributes, "id"> {}

class MedicalRecord
  extends Model<MedicalRecordAttributes, MedicalRecordCreationAttributes>
  implements MedicalRecordAttributes
{
  public id!: number;
  public diagnosis!: string;
  public treatment!: string;
  public notes!: string;
  public patientId!: number;
  public veterinarianId!: number;
  public clinicId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

MedicalRecord.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    diagnosis: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    treatment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "patients",
        key: "id",
      },
    },
    veterinarianId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
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
    tableName: "medical_records",
    modelName: "MedicalRecord",
    timestamps: true,
  }
);

export default MedicalRecord;
