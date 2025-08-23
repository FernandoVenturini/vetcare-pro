import { Model, Optional } from "sequelize";
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
interface AppointmentCreationAttributes extends Optional<AppointmentAttributes, "id"> {
}
declare class Appointment extends Model<AppointmentAttributes, AppointmentCreationAttributes> implements AppointmentAttributes {
    id: number;
    date: Date;
    time: string;
    type: string;
    status: string;
    notes: string;
    patientId: number;
    clientId: number;
    userId: number;
    clinicId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Appointment;
//# sourceMappingURL=Appointment.d.ts.map