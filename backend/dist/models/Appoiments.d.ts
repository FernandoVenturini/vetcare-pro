import { Model } from 'sequelize';
declare class Appointment extends Model {
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
//# sourceMappingURL=Appoiments.d.ts.map