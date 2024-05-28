"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import Image from "next/image";
import Logo from "../../../../public/images/Skateboarding.gif";

export default function SplashScreen({ finishLoading }: any) {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader.add({
      targets: "#logo",
      translateX: 1000,
      scale: 1,
      loop: true,
      duration: 2000,
      easing: "easeInOutQuad",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {}, 10);
    animate();
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-aiesec-blue">
        <Image
          id="logo"
          unoptimized
          src={Logo}
          alt="animation"
          width={60}
          priority
        />
      </div>
    </>
  );
}
