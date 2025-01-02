'use client'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
            <body>
                <main>{children}</main>
            </body>
    )
}