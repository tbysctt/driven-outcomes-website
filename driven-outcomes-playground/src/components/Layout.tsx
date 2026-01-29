import { Outlet } from "react-router-dom";
import { CursorDot } from "./CursorDot";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col text-slate-grey-900 antialiased">
      <CursorDot />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
