import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();
  const isHero = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {!isHero && <Navigation />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
