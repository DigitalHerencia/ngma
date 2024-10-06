import NextAuth, { NextAuthOptions } from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

// Extend the default session type to include 'id'
declare module "next-auth" {
    interface Session {
        user: {
            id: string
            name?: string | null
            email?: string | null
            image?: string | null
        }
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID!,
            clientSecret: process.env.AUTH0_CLIENT_SECRET!,
            issuer: `https://${process.env.AUTH0_DOMAIN}`,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            // Extend session object with 'id'
            if (token?.sub) {
                session.user = {
                    ...session.user,
                    id: token.sub,
                }
            }
            return session
        },

        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
    },
    pages: {
        signIn: "/login",
    },
}

export default NextAuth(authOptions)
