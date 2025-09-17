"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "@phosphor-icons/react";
import {Button} from "@heroui/react";

export function ThemeToggle() {
  const {setTheme, resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        className="relative inline-flex items-center justify-center rounded-md text-sm font-medium"
        aria-label="Loading theme toggle"
        isDisabled
      >
        <SunIcon className="h-5 w-5" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      onPress={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5 transition-transform duration-200" />
      ) : (
        <MoonIcon className="h-5 w-5 transition-transform duration-200" />
      )}
    </Button>
  );
}
