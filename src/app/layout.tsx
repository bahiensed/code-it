import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import { geistMono, geistSans } from '@/app/fonts'
import '@/app/styles/globals.css'

export const metadata: Metadata = {
  title: 'Code-it Club',
  description: 'Ciência da Computação Online. Aprenda a programar em C, Python ou JavaScript. Conheça as melhores ferramentas de IA para utilizar no seu dia-a-dia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
