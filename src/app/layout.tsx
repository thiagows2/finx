import StyledComponentsRegistry from '../../lib/registry'

export const metadata = {
  title: 'Finx',
  description: 'Improve your finances with Finx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
