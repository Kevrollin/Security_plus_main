
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LoadingScreen } from "./LoadingScreen";
import { Particles } from "./Particles";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
  showWhatsApp?: boolean;
}

export function Layout({ children, showWhatsApp = true }: LayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
          <Particles />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
          {showWhatsApp && <WhatsAppButton />}
        </div>
      )}
    </>
  );
}
