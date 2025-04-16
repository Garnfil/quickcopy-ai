"use server";

import { createAdminClient, createSessionClient } from "@/appwrite/config";
import { ID } from "appwrite";

export async function createUser(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const { account } = await createAdminClient();
        const user = await account.create(ID.unique(), email, password);
        console.log(user);
        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message };
    }
}
