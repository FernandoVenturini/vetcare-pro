import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

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

interface LicenseCreationAttributes extends Optional<LicenseAttributes, "id"> {}

class License
  extends Model<LicenseAttributes, LicenseCreationAttributes>
  implements LicenseAttributes
{
  public id!: number;
  public key!: string;
  public type!: string;
  public status!: string;
  public expiresAt!: Date;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

License.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.ENUM("trial", "basic", "premium", "enterprise"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "expired", "suspended"),
      defaultValue: "active",
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
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
    tableName: "licenses",
    modelName: "License",
    timestamps: true,
  }
);

export default License;
