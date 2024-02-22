import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header/Header";


export const metadata = {
  title: "Укладка плитки в Минске | Плиточник",
  description: "Профессиональная укладка плитки в Минске от опытных мастеров. Качественно и быстро. Закажите услуги плиточника прямо сейчас!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
