import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "My Next App",
  description: "Next.js App with Responsive Header",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
