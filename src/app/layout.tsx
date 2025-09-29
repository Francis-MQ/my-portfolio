import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Francis Austria Portfolio",
  description: "Portfolio of Francis Daniel V. Austria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
