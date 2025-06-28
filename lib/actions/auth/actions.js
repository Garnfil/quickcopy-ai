"use server";

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

import {createClient} from "@/lib/supabase/server";

export async function login(data) {
    try {
        const supabase = await createClient();
        const response = await supabase.auth.signInWithPassword(data);

        if (response.error) {
            return {success: false, error: response.error};
        }

        if (!response?.data?.user || !response?.data?.session) {
            return {
                success: false,
                error: {message: "Authentication failed"},
            };
        }

        return {success: true};
    } catch (error) {
        return {success: false, error: {message: error.message}};
    }
}

export async function signup(data) {
    try {
        const supabase = await createClient();
        const {data: signupData, error} = await supabase.auth.signUp(
            data
        );

        if (error) {
            return {success: false, error};
        }

        if (!signupData.user) {
            return {
                success: false,
                error: {message: "User creation failed"},
            };
        }

        return {success: true};
    } catch (error) {
        return {success: false, error: {message: error.message}};
    }
}
