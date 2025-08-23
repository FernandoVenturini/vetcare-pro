import { Model, Optional } from "sequelize";
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    clinicId?: number;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {
}
declare class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    clinicId: number;
    isActive: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    validatePassword(password: string): Promise<boolean>;
}
export default User;
//# sourceMappingURL=User.d.ts.map