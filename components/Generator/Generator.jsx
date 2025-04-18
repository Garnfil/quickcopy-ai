"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { generateMicrocopy } from "@/lib/actions/microcopy";
import toast from "react-hot-toast";
import Skeleton from "../Skeleton/Skeleton";
import { createClient } from "@/lib/supabase/client";

export default function Generator({ user }) {
    const supabase = createClient();
    const [elementType, setElementType] = useState("Button");
    const [tone, setTone] = useState("Neutral");
    const [context, setContext] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [isCopy, setIsCopy] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const data = await generateMicrocopy({ elementType, tone, context });
            setResults(data);

            const { error } = await supabase.from("histories").insert({
                user_id: user?.id,
                element_type: elementType,
                tone,
                context,
                response: JSON.stringify(data),
            });

            if (error) {
                console.log(error);
                throw error;
            }
        } catch (error) {
            toast.error(error?.message ?? "Error Occured");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = (result) => {
        navigator.clipboard.writeText(result);

        toast.success("Copied Successfully");
    };

    return (
        <div className="flex justify-center items-start gap-3">
            <div className="w-2/4">
                <Card className="bg-dashboard-card rounded-xl border-none">
                    <CardHeader>
                        <CardTitle className="text-xl">Generate Microcopy 🔥</CardTitle>
                        <h6 className="text-primary-400 text-sm">
                            Develop precise, helpful text snippets that enhance usability.
                        </h6>
                    </CardHeader>
                    <CardContent>
                        <div className="form-group my-2">
                            <Label className="block my-4">Element Type</Label>
                            <Select
                                onValueChange={(val) => setElementType(val)}
                                defaultValue={"Button"}
                            >
                                <SelectTrigger className="w-full py-5 border border-black">
                                    <SelectValue placeholder="Select a Element Type" />
                                </SelectTrigger>
                                <SelectContent className="bg-white mt-2 border text-black">
                                    <SelectGroup>
                                        <SelectLabel>Elements</SelectLabel>
                                        <SelectItem value="Button">Button</SelectItem>
                                        <SelectItem value="Error Message">Error Message</SelectItem>
                                        <SelectItem value="Tooltip">Tooltip</SelectItem>
                                        <SelectItem value="Form Label">Form Label</SelectItem>
                                        <SelectItem value="Modal/Dialog">Modal/Dialog</SelectItem>
                                        <SelectItem value="Notification">Notification</SelectItem>
                                        <SelectItem value="Onboarding Message">
                                            Onboarding Message
                                        </SelectItem>
                                        <SelectGroup>
                                            <SelectLabel>Card</SelectLabel>
                                            <SelectItem value="Card Title">Card Title</SelectItem>
                                            <SelectItem value="Card Description">
                                                Card Description
                                            </SelectItem>
                                            <SelectItem value="Card Footer">Card Footer</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectLabel>Custom</SelectLabel>
                                            <SelectItem value="Custom Element">
                                                Custom Element
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="form-group my-2">
                            <Label className="block my-4">Tone</Label>
                            <Select onValueChange={(val) => setTone(val)} defaultValue={"Neutral"}>
                                <SelectTrigger className="w-full py-5 border border-black">
                                    <SelectValue placeholder="Select a Tone" />
                                </SelectTrigger>
                                <SelectContent className="bg-white mt-2 border text-black">
                                    <SelectGroup>
                                        <SelectLabel>Tones</SelectLabel>
                                        <SelectItem value="Professional">Professional</SelectItem>
                                        <SelectItem value="Neutral">Neutral</SelectItem>
                                        <SelectItem value="Friendly">Friendly</SelectItem>
                                        <SelectItem value="Technical">Technical</SelectItem>
                                        <SelectItem value="Casual">Casual</SelectItem>
                                        <SelectItem value="Formal">Formal</SelectItem>
                                        <SelectItem value="Playful">Playful</SelectItem>
                                        <SelectItem value="Empathic">Empathic</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="form-group my-2">
                            <Label className="block my-4">Context</Label>
                            <Textarea
                                className="border-black"
                                placeholder="Describe the context and purpose of this element"
                                value={context}
                                onChange={(e) => setContext(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full"
                            size="xl"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? "Generating..." : "Generate Microcopy"} <ArrowRight />
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <div className="w-2/4">
                <Card className="bg-dashboard-card rounded-xl border-none text-white">
                    <CardHeader>
                        <CardTitle className="text-xl">Result ⚡</CardTitle>
                        <h6 className="text-primary-400 text-sm">Your Generated Microcopy</h6>
                    </CardHeader>
                    <CardContent>
                        <h2 className="text-black">
                            Here are 3 microcopy options for your "{elementType}" element:
                        </h2>
                        {loading ? (
                            <Skeleton />
                        ) : (
                            <div className="space-y-4 my-5">
                                {results.map((result, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-4 rounded-md w-full mx-auto font-mono"
                                    >
                                        <pre className="bg-white p-4 rounded-md text-wrap text-sm text-gray-800">
                                            <code>{result}</code>
                                        </pre>
                                        <div className="flex justify-end mt-2">
                                            <button
                                                onClick={() => handleCopy(result)}
                                                className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded-md transition"
                                            >
                                                Copy
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
