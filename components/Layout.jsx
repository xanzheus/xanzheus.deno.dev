const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" />
      </head>
      <body className="h-full">
        <div className="flex flex-column min-h-screen">{children}</div>
      </body>
    </html>
  )
}

export default Layout
