import { Model, Sequelize, DataTypes } from "sequelize";

export default class User extends Model {
    public id?: number;
    public firstname!: string;
    public lastname!: string;
    public gender!: string;
    public postcode!: number;
    public dietary?: string[];
    public availability!: string[];
    public images?: string[];
}

export const UserMap = (sequelize: Sequelize) => {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            firstname: {
                type: DataTypes.STRING,
            },
            lastname: {
                type: DataTypes.STRING,
            },
            gender: {
                type: DataTypes.STRING,
            },
            postcode: {
                type: DataTypes.INTEGER,
            },
            dietary: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            availability: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            images: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
        },
        {
            sequelize,
            tableName: "users",
            timestamps: false,
        }
    );
    User.sync();
};
