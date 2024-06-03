export const getUsers = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/v1/users");
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/users/${id}`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
