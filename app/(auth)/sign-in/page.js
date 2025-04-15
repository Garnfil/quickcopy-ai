import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function SignIn() {
    return (
        <div className="w-full h-[90vh]">
            <div className="w-full h-full flex justify-center items-center">
                <Card
                    className="w-[450px] px-10 py-12"
                    style={{ boxShadow: "0 24px 64px #26214a1a" }}
                >
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
                        <CardDescription>Write Better UI Copy in Seconds</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Email</Label>
                                    <Input id="name" placeholder="Your Email Address" />
                                </div>
                                <div className="text-end">
                                    <div className="flex flex-col space-y-1.5 mb-1">
                                        <Label htmlFor="name">Password</Label>
                                        <Input id="name" placeholder="Your Password" />
                                    </div>
                                    <Link
                                        href={"#"}
                                        className="text-primary w-full text-end text-xs"
                                    >
                                        Forgot Password
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button className="w-full py-7 text-lg font-semibold">Login</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
