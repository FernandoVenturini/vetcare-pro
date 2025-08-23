import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface InventoryItemAttributes {
  id: number;
  name: string;
  description: string;
  quantity: number;
  minStock: number;
  price: number;
  category: string;
  clinicId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface InventoryItemCreationAttributes
  extends Optional<InventoryItemAttributes, "id"> {}

class InventoryItem
  extends Model<InventoryItemAttributes, InventoryItemCreationAttributes>
  implements InventoryItemAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public quantity!: number;
  public minStock!: number;
  public price!: number;
  public category!: string;
  public clinicId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

InventoryItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    minStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: "inventory_items",
    modelName: "InventoryItem",
    timestamps: true,
  }
);

export default InventoryItem;
