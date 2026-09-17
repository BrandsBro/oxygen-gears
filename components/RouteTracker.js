"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RouteTracker() {
  const pathname = usePathname();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return; // Skip first run — Tag already fires initial PageView
    }
    if (typeof window !== "undefined" && window.AnyTrack) {
      window.AnyTrack("PageView");
    }
  }, [pathname]);

  return null;
}
