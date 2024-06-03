import React from "react";
import { TDate } from "../../../common/types";

type Props = {
    date: TDate;
};

const DateItem = ({ date }: Props) => {
    const formatDate = () => {
        return <span>{new Date(date.datetime).toUTCString()}</span>;
    };
    return (
        <div>
            <p className="font-semi-bold block">
                {date.users[0]} and {date.users[1]} at {date.venue} on{" "}
                {formatDate()}
            </p>
        </div>
    );
};

export default DateItem;
