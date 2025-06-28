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
import Link from "next/link";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {login} from "@/lib/actions/auth/actions";

export default function SignInForm() {
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

            const response = await login(data);

            if (!response.success) {
                // Use the safe error message from the server action
                toast.error(
                    response.error?.message ||
                        "Login failed. Please try again."
                );
                return;
            }

            toast.success("Login successful!");
            router.push("/account/dashboard");
        } catch (error) {
            // This will catch any unexpected client-side errors
            toast.error(
                "An unexpected error occurred. Please try again."
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
                    Welcome Back
                </CardTitle>
                <CardDescription>
                    Write Better UI Copy in Seconds
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-6">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input
                                id="name"
                                placeholder="Your Email Address"
                                name="email"
                            />
                        </div>
                        <div className="text-end">
                            <div className="flex flex-col space-y-1.5 mb-1">
                                <Label htmlFor="name">Password</Label>
                                <Input
                                    id="name"
                                    placeholder="Your Password"
                                    name="password"
                                    type="password"
                                />
                            </div>
                            <Link
                                href={"#"}
                                className="text-primary w-full text-end text-xs"
                            >
                                Forgot Password
                            </Link>
                        </div>
                    </div>
                    <CardFooter className="flex justify-between mt-5">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-7 text-lg font-semibold"
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}
