import { Model, Optional } from "sequelize";
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
interface PatientCreationAttributes extends Optional<PatientAttributes, "id"> {
}
declare class Patient extends Model<PatientAttributes, PatientCreationAttributes> implements PatientAttributes {
    id: number;
    name: string;
    species: string;
    breed: string;
    age: number;
    weight: number;
    clientId: number;
    clinicId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Patient;
//# sourceMappingURL=Patient.d.ts.map