'use client';

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UpdateUser = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            if (name) {
                await authClient.updateUser({
                    name: name,
                });
            }

            if (email) {
                await authClient.changeEmail({
                    newEmail: email,
                });
            }

            alert("User updated successfully");

            router.push('/myprofile');
        } catch (error) {
            console.log(error);
            alert("Update failed");
        }
    };

    return (
        <div className="flex justify-center items-center my-10 h-[80vh]">
            <form onSubmit={handleUpdate} className="w-90 py-10 border border-neutral-400 rounded-lg px-7">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-bold text-primary mb-5">Update user</h1>

                    <input
                        className="input"
                        type="text"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />

                    <input
                        className="input"
                        type="email"
                        placeholder="Enter new email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button className="btn btn-primary w-full" type="submit">
                        Update User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;