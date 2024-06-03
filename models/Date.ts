import { Model, Sequelize, DataTypes } from "sequelize";

export default class Date extends Model {
    public id?: number;
    public users!: number[];
    public datetime!: Date;
    public venue!: string;
}

export const DateMap = (sequelize: Sequelize) => {
    Date.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            users: {
                type: DataTypes.ARRAY(DataTypes.INTEGER),
            },
            datetime: {
                type: DataTypes.DATE,
            },
            venue: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            tableName: "dates",
            timestamps: false,
        }
    );
    Date.sync();
};
