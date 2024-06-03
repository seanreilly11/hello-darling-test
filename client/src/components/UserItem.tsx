import React from "react";
import { TUser } from "../../../common/types";

type Props = {
    user: TUser;
};

const UserItem = ({ user }: Props) => {
    return (
        <div>
            <h4 className="text-lg font-semibold">
                {user.firstname} {user.lastname}
            </h4>
            <div className="flex gap-4">
                <p>{user.gender}</p>
                <p>{user.postcode}</p>
            </div>
        </div>
    );
};

export default UserItem;
