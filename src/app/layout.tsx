import "./globals.css"
import SessionWrapper from "./SessionWrapper" // Client component

export const metadata = {
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
            <body>
                <SessionWrapper>{children}</SessionWrapper>{" "}
                {/* Wrap in SessionProvider */}
            </body>
        </html>
    )
}
