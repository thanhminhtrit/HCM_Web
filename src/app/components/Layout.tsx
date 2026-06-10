import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useJourneyProgress } from "../hooks/useJourneyProgress";

export function Layout() {
  const location = useLocation();
  const isHero = location.pathname === "/";
  const { markVisited } = useJourneyProgress();

  useEffect(() => {
    markVisited(location.pathname);
  }, [location.pathname, markVisited]);

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
