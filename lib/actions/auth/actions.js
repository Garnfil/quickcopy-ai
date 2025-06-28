"use server";

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

import {createClient} from "@/lib/supabase/server";

export async function login(data) {
    try {
        const supabase = await createClient();
        const {data: authData, error} =
            await supabase.auth.signInWithPassword(data);

        if (error) {
            // Return a safe error message for production
            return {
                success: false,
                error: {
                    message: "Invalid login credentials",
                    code: error.code,
                },
            };
        }

        if (!authData?.user || !authData?.session) {
            return {
                success: false,
                error: {message: "Authentication failed"},
            };
        }

        return {success: true};
    } catch (error) {
        // Generic error for production
        return {
            success: false,
            error: {
                message: "Authentication error",
                code: "AUTH_ERROR",
            },
        };
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
