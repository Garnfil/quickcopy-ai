import React from "react";
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
import { createUser } from "@/lib/actions/user";

export default function SignUpForm() {
    // const handleSubmit = async () => {
    //     const user = await createUser(formData);
    //     console.log(user);
    // };

    return (
        <Card
            className="w-[450px] px-10 py-12"
            style={{ boxShadow: "0 24px 64px #26214a1a" }}
        >
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Create your account</CardTitle>
                <CardDescription>It only takes a minute to begin</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={createUser}>
                    <div className="grid w-full items-center gap-6">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                            />
                        </div>
                    </div>
                    <CardFooter className="flex justify-between mt-6">
                        <Button
                            type="submit"
                            className="w-full py-7 text-lg font-semibold"
                        >
                            Register
                        </Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}
