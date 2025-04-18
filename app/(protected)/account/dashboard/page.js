import Generator from "@/components/Generator/Generator";
import { createClient } from "@/lib/supabase/server";
import { Toaster } from "react-hot-toast";

export default async function Dashboard() {
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
            <Generator user={user} />
        </div>
    );
}
