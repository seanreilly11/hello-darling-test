import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUsers } from "../services/users";
import { TDate, TUser } from "../../../common/types";
import { addDate } from "../services/dates";

type Props = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type Inputs = {
    user1: string;
    user2: string;
    datetime: Date;
    venue: string;
};

const AddDateModal = ({ showModal, setShowModal }: Props) => {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });
    const mutation = useMutation({
        mutationFn: (date: TDate) => addDate(date),
        onSuccess: async () => {
            setShowModal(false);
            queryClient.invalidateQueries({
                queryKey: ["dates"],
            });
        },
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) =>
        mutation.mutate(makeDateObj(data));

    const makeDateObj = ({ venue, datetime, user1, user2 }: Inputs) => {
        const obj: TDate = {
            venue,
            datetime: new Date(datetime),
            users: [parseInt(user1), parseInt(user2)],
        };
        return obj;
    };

    return (
        <dialog
            open={showModal}
            className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
            <h2 className="text-2xl font-semibold mb-2">New date</h2>
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                <div className="block text-gray-700 text-sm font-bold mb-2">
                    <label>User 1</label>
                    <select
                        {...register("user1", { required: true })}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select a user</option>
                        {data?.map((user: TUser) => (
                            <option
                                key={user.id?.toString()}
                                value={user.id?.toString()}
                            >
                                {user.firstname} {user.lastname}
                            </option>
                        ))}
                    </select>
                    {errors.user1 && <span>This field is required</span>}
                </div>
                <div className="block text-gray-700 text-sm font-bold mb-2">
                    <label>User 2</label>
                    <select
                        {...register("user2", { required: true })}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select a user</option>
                        {data?.map((user: TUser) => (
                            <option
                                key={user.id?.toString()}
                                value={user.id?.toString()}
                            >
                                {user.firstname} {user.lastname}
                            </option>
                        ))}
                    </select>
                    {errors.user2 && <span>This field is required</span>}
                </div>
                <div className="block text-gray-700 text-sm font-bold mb-2">
                    <label htmlFor="datetime">Date and time</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="datetime-local"
                        {...register("datetime", { required: true })}
                    />
                    {errors.datetime && <span>This field is required</span>}
                </div>
                <div className="block text-gray-700 text-sm font-bold mb-2">
                    <label htmlFor="venue">Venue</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        {...register("venue", { required: true })}
                    />
                    {errors.venue && <span>This field is required</span>}
                </div>
                <input
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                />
            </form>
        </dialog>
    );
};

export default AddDateModal;
