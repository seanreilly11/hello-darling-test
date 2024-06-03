import { Request, Response } from "express";
import Date, { DateMap } from "../models/Date";
import database from "../database";

// @desc Get all dates
// @route GET /api/v1/dates
export const getDates = async (req: Request, res: Response) => {
    try {
        DateMap(database);
        const dates: Date[] = await Date.findAll();
        return res.status(200).json(dates);
    } catch (err) {
        return res.status(500).json({ error: "Error" });
    }
};

// @desc Get date by ID
// @route GET /api/v1/dates/:id
export const getDateByID = async (req: Request, res: Response) => {
    try {
        DateMap(database);
        const { id } = req.params;
        const date: Date | null = await Date.findByPk(id);
        if (!date) return res.status(404).json({ error: "No date found" });

        return res.status(200).json(date);
    } catch (err) {
        return res.status(500).json({ error: "Error" });
    }
};

// @desc Add new date
// @route POST /api/v1/dates
export const addDate = async (req: Request, res: Response) => {
    try {
        DateMap(database);
        const payload = req.body;
        const date = await Date.create(payload);
        return res.status(201).json(date);
    } catch (err) {
        return res.status(500).json({ error: "Error" });
    }
};
