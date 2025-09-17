"use client";
import * as React from "react";
import {Button, ButtonProps} from "@heroui/react";
import {cva, VariantProps} from "class-variance-authority";

// Khi muốn thiết lập các thuộc tính khác, anh em nhớ:
// 1. Tên thuộc tính mới phải khác với các thuộc tính đã có sẵn trong ButtonProps của HeroUI
// 2. Thêm tên thuộc tính mới vào trong interface MyButtonProps
// 3. Thêm giá trị mặc định của thuộc tính mới trong phần defaultVariants
// 4. Thêm giá trị mặc định của thuộc tính mới trong phần destructuring props của MyButton
// 5. Thêm tên thuộc tính mới vào trong hàm buttonVariants

const buttonVariants = cva(
  "font-medium transition-all duration-300 focus:outline-none",
  {
    variants: {
      kind: {
        primary:
          "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-gray-100 dark:focus:ring-blue-500",
        rainbow:
          "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white hover:from-red-600 hover:via-yellow-600 hover:to-green-600 focus:ring-blue-400 dark:from-red-600 dark:via-yellow-600 dark:to-green-600 dark:hover:from-red-700 dark:hover:via-yellow-700 dark:hover:to-green-700 dark:focus:ring-blue-500",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      variantKind: {
        solid: "",
        outline:
          "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-900/20",
      },
      shape: {
        rounded: "rounded",
        pill: "rounded-full",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      kind: "primary",
      size: "md",
      variantKind: "solid",
      shape: "rounded",
    },
  }
);

export interface MyButtonProps
  extends Omit<ButtonProps, "size">,
    VariantProps<typeof buttonVariants> {}

export function MyButton(
  {
    kind = "primary",
    size = "md",
    variantKind = "solid",
    shape = "rounded",
    className,
    ...props
  }: MyButtonProps,
  ref?: React.Ref<HTMLButtonElement>
) {
  return (
    <Button
      ref={ref}
      className={buttonVariants({kind, size, variantKind, shape, className})}
      {...props}
    />
  );
}
