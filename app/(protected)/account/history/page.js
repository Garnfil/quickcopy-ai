import HistoryComponent from "@/components/History/HistoryComponent";
import { createClient } from "@/lib/supabase/server";
import React from "react";
import { Toaster } from "react-hot-toast";

export default async function HistoryPage() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    return (
        <div className="w-3/4 mx-auto">
            <Toaster
                position="top-center"
                toastOptions={{
                    success: {
                        style: {
                            background: "green",
                            color: "white",
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
            <HistoryComponent user={user} />
        </div>
    );
}
