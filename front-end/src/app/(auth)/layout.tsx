import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo/Brand */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Laboratory Management System
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Quản lý phòng thí nghiệm hiệu quả
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 py-8">
          {children}
        </div>
      </div>
    </div>
  );
}
