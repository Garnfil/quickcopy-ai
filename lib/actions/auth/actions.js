"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function login(data) {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        return { success: false, error };
    }

    return { success: true };
}

export async function signup(data) {
    const supabase = await createClient();

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        return { success: false, error };
    }

    return { success: true };
}
