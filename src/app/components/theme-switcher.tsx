"use client";
import {Switch} from "@nextui-org/react";
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";

import {SunIcon} from "@/assets/icons/sun-icon";
import {MoonIcon} from "@/assets/icons/moon-icon";

export function ThemeSwitcher(): React.ReactNode {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    if (!theme) {
      setTheme("dark");
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Switch
      color="secondary"
      defaultSelected={theme === "light"}
      size="lg"
      thumbIcon={({isSelected, className}) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
      onClick={handleTheme}
    />
  );
}
