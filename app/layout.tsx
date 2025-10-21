
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guillermo Cruz - Business Analyst & Financial Data Analyst',
  description: 'Professional portfolio showcasing expertise in Business Analysis and Financial Data Analysis. Transforming complex business requirements into actionable insights.',
  keywords: 'Business Analyst, Financial Data Analyst, Portfolio, Data Analysis, Business Intelligence, Financial Modeling',
  authors: [{ name: 'Guillermo Cruz' }],
  openGraph: {
    title: 'Guillermo Cruz - BA & FDA Portfolio',
    description: 'Professional portfolio showcasing expertise in Business Analysis and Financial Data Analysis',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
