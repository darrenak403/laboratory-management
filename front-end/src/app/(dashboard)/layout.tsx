import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Dashboard-specific sidebar hoặc navigation có thể thêm ở đây */}
      <div className="flex gap-6">
        {/* Sidebar - có thể thêm sau */}
        {/* <aside className="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <nav>Dashboard Navigation</nav>
        </aside> */}

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
