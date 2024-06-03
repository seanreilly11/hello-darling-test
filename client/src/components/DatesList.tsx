import React from "react";
import { useQuery } from "react-query";
import DateItem from "./DateItem";
import { getDates } from "../services/dates";
import { TDate } from "../../../common/types";
import Loader from "./Loader";

const DatesList = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["dates"],
        queryFn: getDates,
    });

    if (isLoading) return <Loader />;
    return (
        <div className="flex flex-col gap-2">
            {data?.map((date: TDate) => (
                <DateItem key={Math.random()} date={date} />
            ))}
        </div>
    );
};

export default DatesList;
