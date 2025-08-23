import { Model, Optional } from "sequelize";
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
interface ServiceCreationAttributes extends Optional<ServiceAttributes, "id"> {
}
declare class Service extends Model<ServiceAttributes, ServiceCreationAttributes> implements ServiceAttributes {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    clinicId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Service;
//# sourceMappingURL=Service.d.ts.map