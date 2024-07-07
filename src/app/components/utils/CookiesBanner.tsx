"use client";

import React, { useEffect, useState } from "react";
import cookie from "js-cookie";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowBanner(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[5200] flex flex-col items-center bg-gray-800 text-white p-4 md:flex-row md:justify-between md:p-6 scale-in-center">
      <div className="text-center md:text-left">
        <p>This website uses cookies to improve your browsing experience.</p>
        <p>Please click Accept to continue.</p>
      </div>
      <div className="mt-4 flex gap-2 md:mt-0">
        <button
          onClick={handleAccept}
          className="rounded bg-green-600 px-4 py-2 text-sm font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="rounded bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
