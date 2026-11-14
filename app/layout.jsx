export const metadata = {
  title: "Joel's Websites and Webapps | Yaounde",
  description: "Learn to build websites & webapps. Buy premium websites & webapps in Cameroon and abroad."
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{margin:0,fontFamily:"'Inter', system-ui, sans-serif",background:'#FAF7F0',color:'#0A0F1E'}}>{children}</body>
    </html>
  );
}
