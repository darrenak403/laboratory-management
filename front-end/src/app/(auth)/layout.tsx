import React from "react";
import authImage from "../../../public/images/black-girl.svg";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div className="absolute inset-0 min-w-[100vw] min-h-[100vh] flex justify-around items-center bg-[var(--color-100)] z-10">
      <div className="min-h-[85vh] w-[90%] bg-white rounded-[20px] flex overflow-hidden ">
        {/* Left side */}
        <div className="flex-[1.1] flex items-center justify-center">
          {children}
        </div>
        {/* Right side */}
        <div className="flex-[0.9] flex items-center justify-center bg-[var(--color-400)]">
          <Image
            src={authImage}
            alt="Auth Image"
            width={400}
            height={400}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
