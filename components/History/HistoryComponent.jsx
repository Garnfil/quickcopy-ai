"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { ArrowRight, Trash } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";
import format from "date-fns/format";

export default function HistoryComponent({ user }) {
    const supabase = createClient();
    const [histories, setHistories] = useState([]);
    const [selectedMicropy, setSelectedMicrocopy] = useState(null);

    const getHistories = useCallback(async () => {
        const { data, error, status } = await supabase
            .from("histories")
            .select(`id, user_id, element_type, tone, response, context, created_at`)
            .eq("user_id", user?.id);

        if (error) {
            toast.error(error.message);
        }

        const updatedData = data.map((history) => ({
            ...history,
            response: JSON.parse(history.response),
        }));

        setHistories(updatedData);
    }, [user, supabase]);

    const handleSelectMicrocopy = (id) => {
        const microcopy = histories.find((history) => history.id == id);
        console.log(microcopy);
        setSelectedMicrocopy(microcopy);
    };

    const handleCopy = (result) => {
        navigator.clipboard.writeText(result);

        toast.success("Copied Successfully");
    };

    useEffect(() => {
        getHistories();
    }, [user, getHistories]);

    return (
        <div className="flex justify-between gap-5 items-start">
            <div className="w-2/3">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>History</CardTitle>
                        <CardDescription>
                            View detailed history of your activities in the table below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableCaption>A list of your microcopy generated.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Element</TableHead>
                                    <TableHead>Tone</TableHead>
                                    <TableHead>Created At</TableHead>
                                    <TableHead className="text-center">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {histories.map((history) => (
                                    <TableRow key={history.id}>
                                        <TableCell className="font-medium">{history.id}</TableCell>
                                        <TableCell>{history.element_type}</TableCell>
                                        <TableCell>{history.tone}</TableCell>
                                        <TableCell className="">
                                            {format(new Date(history.created_at), "MMM dd, yyyy")}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <div className="flex justify-center gap-2">
                                                <Button
                                                    onClick={() =>
                                                        handleSelectMicrocopy(history?.id)
                                                    }
                                                    size={"xs"}
                                                    variant={"ghost"}
                                                >
                                                    <ArrowRight />
                                                </Button>
                                                {/* <Button variant={"destructive"} size={"xs"}>
                                                    <Trash />
                                                </Button> */}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <div className="w-1/3">
                <Card>
                    <CardHeader>
                        <CardTitle>Generated Microcopy # {selectedMicropy?.id}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table className="text-wrap ">
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Element Type</TableCell>
                                    <TableCell>{selectedMicropy?.element_type}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Tone</TableCell>
                                    <TableCell>{selectedMicropy?.tone}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Context</TableCell>
                                    <TableCell className="text-wrap">
                                        {selectedMicropy?.context}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div className="my-3 space-y-3">
                            <h2 className="font-semibold text-lg">Response</h2>
                            {selectedMicropy?.response?.map((response, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 p-4 rounded-md w-full mx-auto font-mono"
                                >
                                    <pre className="bg-white p-4 rounded-md text-wrap text-sm text-gray-800">
                                        <code>{response}</code>
                                    </pre>
                                    <div className="flex justify-end mt-2">
                                        <button
                                            onClick={() => handleCopy(response)}
                                            className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded-md transition"
                                        >
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
