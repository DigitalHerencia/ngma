"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"
import { JSX } from "react/jsx-runtime"

/**
 * A wrapper component that provides the NextAuth.js session context to its child components.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components to wrap.
 * @returns {JSX.Element} The wrapped child components.
 */
export default function SessionWrapper({
    children,
}: {
    children: ReactNode
}): JSX.Element {
    // eslint-disable-next-line react/no-children-prop
    return <SessionProvider children={undefined}>{children}</SessionProvider>
}
