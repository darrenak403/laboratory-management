"use client";
import {cn, Tooltip} from "@heroui/react";
import React from "react";
import {Info} from "phosphor-react";
import {cva} from "class-variance-authority";

export interface ToolTipTileProps {
  title: string;
  tooltip: string;
  size?: "sm" | "md" | "lg";
}

const titleCva = ({size}: {size: "sm" | "md" | "lg"}) => {
  switch (size) {
    case "sm":
      return "tooltip-tile-sm";
    case "lg":
      return "tooltip-tile-lg";
    case "md":
    default:
      return "tooltip-tile-md";
  }
};

const infoCva = cva("text-foreground-500", {
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const ToolTipTile = ({
  title,
  tooltip,
  size = "md",
}: ToolTipTileProps) => {
  return (
    <div className={cn(titleCva({size}), "flex items-center gap-1")}>
      {title}
      {tooltip && (
        <Tooltip content={tooltip}>
          <Info className={infoCva({size})} />
        </Tooltip>
      )}
    </div>
  );
};
