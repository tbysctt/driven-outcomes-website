import { Outlet } from "react-router-dom";
import { CursorDot } from "./CursorDot";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PromotionalPopupTop } from "./PromotionalPopupTop";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col text-neutral-900 antialiased">
      <ScrollToTop />
      <CursorDot />
      <PromotionalPopupTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
