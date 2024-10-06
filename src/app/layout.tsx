"use client"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { SessionProvider } from "next-auth/react"

const bebasNeue = localFont({
    src: "./fonts/BebasNeue/BebasNeue-Regular.woff",
    variable: "--font-bebas-neue",
    weight: "400",
})

export const metadata: Metadata = {
    title: "NextGen Management Agency",
    description: "Manage talent seamlessly with NextGen Management Agency.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${bebasNeue.variable} antialiased`}>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    )
}
