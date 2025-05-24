import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../../lib/prisma";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {
                try {
                    const administrator = await prisma.administrators.findFirst({
                        where: {
                            email: credentials?.email
                        }
                    });
                    const isPasswordCorrect = await bcrypt.compare(credentials!.password, administrator!.password);
                    if (!isPasswordCorrect) {
                        return null;
                    }
                    return administrator;
                } catch (error) {
                    throw error;
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    }
};