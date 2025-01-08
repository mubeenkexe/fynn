import type { NextAuthConfig } from "next-auth";
import google from "next-auth/providers/google";
export default {
    providers: [
        google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
} satisfies NextAuthConfig;
