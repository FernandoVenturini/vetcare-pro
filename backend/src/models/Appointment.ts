import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface AppointmentAttributes {
  id: number;
  date: Date;
  time: string;
  type: string;
  status: string;
  notes?: string;
  patientId: number;
  clientId: number;
  userId: number;
  clinicId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface AppointmentCreationAttributes
  extends Optional<AppointmentAttributes, "id"> {}

class Appointment
  extends Model<AppointmentAttributes, AppointmentCreationAttributes>
  implements AppointmentAttributes
{
  public id!: number;
  public date!: Date;
  public time!: string;
  public type!: string;
  public status!: string;
  public notes!: string;
  public patientId!: number;
  public clientId!: number;
  public userId!: number;
  public clinicId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(
        "consulta",
        "retorno",
        "vacinação",
        "cirurgia",
        "banho_tosa",
        "exame"
      ),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("agendado", "confirmado", "realizado", "cancelado"),
      defaultValue: "agendado",
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
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clients",
        key: "id",
      },
    },
    userId: {
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
    tableName: "appointments",
    modelName: "Appointment",
    timestamps: true,
  }
);

export default Appointment;
