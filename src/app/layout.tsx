import type { Metadata } from "next"
import { Bebas_Neue } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bebas",
})

export const metadata: Metadata = {
    title: "NextGen Management Agency",
    description:
        "Manage talent and clients seamlessly with NextGen Management Agency.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${bebasNeue.variable} bg-black antialiased`}>
                {children}
            </body>
        </html>
    )
}