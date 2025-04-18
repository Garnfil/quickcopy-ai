import SignInForm from "@/components/Forms/SignInForm";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function SignIn() {
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
                <SignInForm />
            </div>
        </div>
    );
}
