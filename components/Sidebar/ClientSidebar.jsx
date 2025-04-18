"use client";

import { useEffect, useState } from "react";
import { List, LogOut, Menu, Settings, Text } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ClientSidebar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const supabase = createClient();
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUserEmail(user?.email ?? null);
        };

        fetchUser();
    }, []);

    const navItems = [
        { href: "/account/dashboard", label: "Generate", icon: <Text /> },
        { href: "/account/history", label: "History", icon: <List /> },
        { href: "/account/settings", label: "Settings", icon: <Settings /> },
    ];

    return (
        <aside className="w-[100px] bg-dashboard-aside rounded-xl lg:w-1/5 2xl:w-1/6 h-full p-5">
            <div className="h-full w-full flex justify-between items-start flex-col">
                <div className="space-y-5 w-full">
                    <div className="w-full flex justify-between items-center py-3">
                        <h1 className="font-bold text-lg hidden lg:block">QuickCopy AI</h1>
                        <Button className="w-full lg:w-fit p-0 rounded-full bg-transparent">
                            <Menu size={30} />
                        </Button>
                    </div>

                    <ul className="w-full flex flex-col gap-4 items-center justify-center">
                        {navItems.map((item) => (
                            <li key={item.href} className="w-full">
                                <Link href={item.href}>
                                    <Button
                                        variant={pathname === item.href ? "default" : "outline"}
                                        className={`justify-start text-sm w-[40px] h-[40px] lg:h-12 lg:w-full border-white hover:bg-primary-200 rounded-full lg:rounded-lg ${
                                            pathname === item.href && "bg-primary-500"
                                        }`}
                                    >
                                        {item.icon}
                                        <span className="hidden lg:block">{item.label}</span>
                                    </Button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="py-3 w-full flex justify-between items-center flex-col lg:flex-row gap-5">
                    <div className="w-2/3">
                        <h6 className="text-xs hidden lg:block">{userEmail}</h6>
                        <h5 className="text-sm text-primary-200 font-semibold hidden lg:flex gap-1">
                            <span>15</span> <span className="hidden lg:block">credits</span>
                        </h5>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <form action="/auth/signout" method="post">
                                    <Button type="submit" className="bg-primary-500">
                                        <LogOut />
                                    </Button>
                                </form>
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
