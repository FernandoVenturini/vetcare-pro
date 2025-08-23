import { Model, Optional } from "sequelize";
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
interface InventoryItemCreationAttributes extends Optional<InventoryItemAttributes, "id"> {
}
declare class InventoryItem extends Model<InventoryItemAttributes, InventoryItemCreationAttributes> implements InventoryItemAttributes {
    id: number;
    name: string;
    description: string;
    quantity: number;
    minStock: number;
    price: number;
    category: string;
    clinicId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default InventoryItem;
//# sourceMappingURL=InventoryItem.d.ts.map