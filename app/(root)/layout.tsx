'use client'

export default function RootLayout({
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