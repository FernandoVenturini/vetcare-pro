import { Model, Optional } from "sequelize";
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
interface MedicalRecordCreationAttributes extends Optional<MedicalRecordAttributes, "id"> {
}
declare class MedicalRecord extends Model<MedicalRecordAttributes, MedicalRecordCreationAttributes> implements MedicalRecordAttributes {
    id: number;
    diagnosis: string;
    treatment: string;
    notes: string;
    patientId: number;
    veterinarianId: number;
    clinicId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default MedicalRecord;
//# sourceMappingURL=MedicalRecord.d.ts.map