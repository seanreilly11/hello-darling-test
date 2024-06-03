import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import UsersList from "./components/UsersList";
import DatesList from "./components/DatesList";
import AddDateModal from "./components/AddDateModal";

const App = () => {
    const queryClient = new QueryClient();
    const [showModal, setShowModal] = useState(false);

    return (
        <QueryClientProvider client={queryClient}>
            <AddDateModal showModal={showModal} setShowModal={setShowModal} />

            <div className="container mx-auto">
                <h1 className="text-3xl mb-3">Hello Darling</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="basis-full">
                        <h2 className="text-2xl mb-2">Users</h2>
                        <UsersList />
                    </div>
                    <div className="basis-full">
                        <div className="flex gap-3 mb-2">
                            <h2 className="text-2xl">Dates List</h2>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setShowModal(true)}
                            >
                                Add Date
                            </button>
                        </div>
                        <DatesList />
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default App;
