import { Request, Response } from "express";
import User, { UserMap } from "../models/User";
import database from "../database";

// @desc Get all users
// @route GET /api/v1/users
export const getUsers = async (req: Request, res: Response) => {
    try {
        UserMap(database);
        const users: User[] = await User.findAll();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ error: "Error" });
    }
};

// @desc Get user by ID
// @route GET /api/v1/users/:id
export const getUserByID = async (req: Request, res: Response) => {
    try {
        UserMap(database);
        const { id } = req.params;
        const user: User | null = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: "No user found" });

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: "Error" });
    }
};
