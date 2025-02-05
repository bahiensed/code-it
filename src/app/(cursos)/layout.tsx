import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Bot, Cat, Code, Database, FileCode2, LaptopMinimalCheck, LayoutTemplate } from 'lucide-react'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <header className='header'>
        <Image alt="logo" src="/logo.png" width="261" height="87" />

        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <div className='box'>
        <nav className="nav">
          <ol>
            <li>
              <a href="/computer-science/intro">
                <LaptopMinimalCheck />
                Ciência da Computação
              </a>
            </li>

            <li>
              <a href="#">
              <Database />
              Ciência de Dados
              </a>
            </li>

            <li>
              <a href="#">
                <Code />
                Linguagens de Programação
              </a>
              <ol className="submenu">
                <li>
                  <a href="#">
                    <Cat />
                    Scratch
                  </a>
                </li>

                <li><a href="#">C</a></li>
                <li><a href="#">Python</a></li>
                <li><a href="#">JavaScript</a></li>
              </ol>
            </li>

            <li>
              <a href="#">
                <LayoutTemplate />
                Desenvolvimento Web
              </a>
              <ol className="submenu">
                <li>
                  <a href="#">
                    <FileCode2 />
                    HTML
                  </a>
                </li>

                <li>
                  <a href="#">
                    CSS
                  </a>
                </li>

                <li><a href="#">JavaScript</a></li>
                <li><a href="#">TypeScript</a></li>
                <li><a href="#">React</a></li>
                <li><a href="#">Next.js</a></li>
              </ol>
            </li>
            <li>
              <a href="#">
                <Bot />
                Inteligência Artificial
              </a>
            </li>
          </ol>
        </nav>

        <main className="main">
          {children}
        </main>

        <aside className="aside">
          <h2>Aulas</h2>
        </aside>
      </div>

      <footer className='footer'>
      </footer>
    </>    
  )
}
