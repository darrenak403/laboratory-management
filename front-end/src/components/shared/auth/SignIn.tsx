"use client";
import {Button, Input} from "@heroui/react";
import Image from "next/image";
import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Icon} from "@iconify/react/dist/iconify.js";
import {SignInFormValues} from "@/types/auth";
import Link from "next/link";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
});

export const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik<SignInFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      // TODO: Call your login API here
      setTimeout(() => setLoading(false), 1000);
    },
  });
  return (
    <div className="wrapper min-w-[30vw] min-h-[65vh] flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.15)]  rounded-[20px]">
      <div className="container flex flex-col items-center justify-center bg-white ">
        {/* Logo */}
        <div className="image mb-4 mt-5">
          <Image
            src="/images/signin.svg"
            alt="Sign In"
            width={200}
            height={50}
          />
        </div>
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-[600] text-xl">
            Sign in to Laboratory Management System
          </p>
          <span className="font-[300] text-sm text-center text-zinc-500">
            Welcome back! Please sign in to continue
          </span>
        </div>
        {/* Login google button */}
        <div className="mt-8">
          <Button
            variant="bordered"
            className="flex items-center justify-center gap-2 w-full px-10 py-1 rounded-[8px] border border-zinc-200 hover:bg-zinc-100 "
          >
            <div className="flex items-center gap-2">
              <Icon icon="flat-color-icons:google" width="25" height="25" />
              <p>Login with Google</p>
            </div>
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center w-[450px] mt-6">
          <div className="flex-1 h-px bg-zinc-200" />
          <span className="mx-2 text-xs text-zinc-400">or</span>
          <div className="flex-1 h-px bg-zinc-200" />
        </div>

        {/* Form */}
        <form
          className="min-w-[400px] flex flex-col gap-4 mt-6"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className="mb-5">
            <Input
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onValueChange={(value) => formik.setFieldValue("email", value)}
              isInvalid={!!(formik.touched.email && formik.errors.email)}
              onBlur={() => formik.setFieldTouched("email", true)}
              disabled={loading}
              className="w-full"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-xs text-red-500 mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div>
            <Input
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onValueChange={(value) => formik.setFieldValue("password", value)}
              isInvalid={!!(formik.touched.password && formik.errors.password)}
              onBlur={() => formik.setFieldTouched("password", true)}
              disabled={loading}
              className="w-full"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-xs text-red-500 mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="w-[300px] mt-2 bg-gradient-to-r from-amber-400 to-amber-300 text-white font-semibold"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Continue"}
            </Button>
          </div>
        </form>

        {/* Signin link */}
        <div className="w-full text-center mt-6 text-sm">
          <span className="text-zinc-500">Already have an account? </span>
          <Link
            href="/signup"
            className="text-amber-500 font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
