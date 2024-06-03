import React from "react";
import { useQuery } from "react-query";
import { getUsers } from "../services/users";
import UserItem from "./UserItem";
import { TUser } from "../../../common/types";
import Loader from "./Loader";

const UsersList = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    if (isLoading) return <Loader />;
    return (
        <div className="flex flex-col gap-2">
            {data?.map((user: TUser) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UsersList;
