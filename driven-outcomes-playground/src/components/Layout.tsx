import { Outlet } from "react-router-dom";
import { CursorDot } from "./CursorDot";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PromotionalPopupTop } from "./PromotionalPopupTop";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col text-slate-grey-900 antialiased">
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
