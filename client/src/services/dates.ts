import { TDate } from "../../../common/types";

export const getDates = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/v1/dates");
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export const getDate = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/dates/${id}`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export const addDate = async (date: TDate) => {
    try {
        const res = await fetch("http://localhost:3000/api/v1/dates", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(date),
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
