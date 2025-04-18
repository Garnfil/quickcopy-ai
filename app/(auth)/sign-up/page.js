import SignUpForm from "@/components/Forms/SignUpForm";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function SignUp() {
    return (
        <div className="w-full h-[90vh]">
            <Toaster
                position="top-center"
                toastOptions={{
                    success: {
                        style: {
                            background: "green",
                        },
                    },
                    error: {
                        style: {
                            background: "red",
                            color: "white",
                        },
                    },
                }}
            />
            <div className="w-full h-full flex justify-center items-center">
                <SignUpForm />
            </div>
        </div>
    );
}
