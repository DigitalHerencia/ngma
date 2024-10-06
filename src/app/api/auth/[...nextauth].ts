import NextAuth, { AuthOptions } from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import { JWT } from "next-auth/jwt"
import { Session } from "next-auth"
import { Account } from "next-auth"

export const authOptions: AuthOptions = {
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID!, // Non-null assertion
            clientSecret: process.env.AUTH0_CLIENT_SECRET!, // Non-null assertion
            issuer: `https://${process.env.AUTH0_DOMAIN}`,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET!, // Non-null assertion for secret

    session: {
        strategy: "jwt", // Using JWT-based sessions
    },

    callbacks: {
        async session({
            session,
            token,
        }: {
            session: Session
            token: JWT
        }): Promise<Session> {
            if (token.sub) {
                // Now TypeScript will recognize 'id' as part of 'user'
                session.user = {
                    ...session.user,
                    id: token.sub, // Add user ID to session
                }
            }
            return session
        },

        async jwt({
            token,
            account,
        }: {
            token: JWT
            account?: Account | null
        }): Promise<JWT> {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
    },

    pages: {
        signIn: "/login", // Custom login page
    },
}

export default NextAuth(authOptions)
