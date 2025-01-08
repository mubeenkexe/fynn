"use server";

import { signIn } from "@/auth";

export const SignIn = async (acc: string) => {
    try {
        await signIn(acc);
    } catch (error) {
        console.log("🚀 ~ SignIn ~ error:", error);
    }
};
