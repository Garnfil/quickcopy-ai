"use client";

import { useState } from "react";
import { List, LogOut, Menu, Settings, Text } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ClientSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <aside className="w-full bg-dashboard-aside rounded-xl md:w-1/5 2xl:w-1/6 h-full p-5">
            <div className="h-full flex justify-between items-start flex-col">
                <div className="space-y-5 w-full">
                    <div className="w-full flex justify-between items-center py-3">
                        <h1 className="font-bold text-lg">QuickCopy AI</h1>
                        <Button className="p-4 rounded-full bg-transparent">
                            <Menu size={30} />
                        </Button>
                    </div>

                    <ul className="w-full space-y-4">
                        <li>
                            <Link href={"#"}>
                                <Button
                                    variant={`default`}
                                    className="justify-start text-sm h-12 w-full border-primary hover:bg-primary-200"
                                >
                                    <Text /> Generate
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <Button
                                    variant={`outline`}
                                    className="justify-start text-sm h-12 w-full border-primary hover:bg-primary-200"
                                >
                                    <List /> History
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <Button
                                    variant={`outline`}
                                    className="justify-start text-sm h-12 w-full border-primary hover:bg-primary-200"
                                >
                                    <Settings /> Settings
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="py-3 w-full flex justify-between items-center">
                    <div className="w-2/3">
                        <h6 className="text-xs">jamesgarnfil15@gmail.com</h6>
                        <h5 className="text-sm text-primary-200 font-semibold">15 credits </h5>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button>
                                    <LogOut />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Logout</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </aside>
    );
}
