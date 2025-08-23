import { Model, Optional } from "sequelize";
interface LicenseAttributes {
    id: number;
    key: string;
    type: string;
    status: string;
    expiresAt: Date;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface LicenseCreationAttributes extends Optional<LicenseAttributes, "id"> {
}
declare class License extends Model<LicenseAttributes, LicenseCreationAttributes> implements LicenseAttributes {
    id: number;
    key: string;
    type: string;
    status: string;
    expiresAt: Date;
    userId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default License;
//# sourceMappingURL=License.d.ts.map