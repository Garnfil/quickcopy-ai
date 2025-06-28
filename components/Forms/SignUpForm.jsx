"use client";

import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {signup} from "@/lib/actions/auth/actions";

export default function SignUpForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const data = {
                email: formData.get("email"),
                password: formData.get("password"),
            };

            const response = await signup(data);

            if (!response.success) {
                const errorMessage =
                    response.error?.message ||
                    "Signup failed. Please try again.";
                toast.error(errorMessage);
                return;
            }

            toast.success(
                "Account created successfully! Please check your email for verification."
            );
            router.push("/account/dashboard");
        } catch (error) {
            toast.error(
                error.message || "An unexpected error occurred"
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card
            className="w-[450px] px-10 py-12"
            style={{boxShadow: "0 24px 64px #26214a1a"}}
        >
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">
                    Create your account
                </CardTitle>
                <CardDescription>
                    It only takes a minute to begin
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-6">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your email address"
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Create a password"
                                required
                            />
                        </div>
                    </div>
                    <CardFooter className="flex justify-between mt-6">
                        <Button
                            disabled={isLoading}
                            type="submit"
                            className="w-full py-7 text-lg font-semibold"
                        >
                            {isLoading
                                ? "Creating account..."
                                : "Register"}
                        </Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}
