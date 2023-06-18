import "./globals.css";

export const metadata = {
  title: "Mage Picker",
  description: "Mage picking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
