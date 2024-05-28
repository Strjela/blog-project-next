"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashScreenManager({ children }: any) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const finishLoading = () => {
    setShowSplash(false);
  };

  return showSplash ? <SplashScreen finishLoading={finishLoading} /> : children;
}
