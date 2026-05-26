import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/footer'
import Navbar from '../components/navbar'


import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Studio Unpleasant',
        description: 'For the art deprived.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body style={{ overflowX: 'hidden' }}>
        <Navbar />
          {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
