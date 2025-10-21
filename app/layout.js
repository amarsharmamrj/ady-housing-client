import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";

export const metadata = {
  title: "Ady Housing",
  description: "Leading property listing site in Greater Noida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
