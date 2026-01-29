import { Outlet } from "react-router-dom";
import { CursorDot } from "./CursorDot";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="text-slate-grey-900 antialiased">
      <CursorDot />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
