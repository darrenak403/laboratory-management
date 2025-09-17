"use client";
import {Button, Input} from "@heroui/react";
import Image from "next/image";
import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Icon} from "@iconify/react/dist/iconify.js";
import {SignUpFormValues} from "@/types/auth";
import Link from "next/link";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      // TODO: Call your signup API here
      setTimeout(() => setLoading(false), 1000);
    },
  });

  return (
    <div className="wrapper min-w-[30vw] min-h-[78vh] flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[20px]">
      <div className="container flex flex-col items-center justify-center bg-white">
        {/* Logo */}
        <div className="image mb-5">
          <Image
            src="/images/signup.svg"
            alt="Sign Up"
            width={200}
            height={50}
          />
        </div>
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-[600] text-xl">
            Sign up for Laboratory Management System
          </p>
          <span className="font-[300] text-sm text-center text-zinc-500">
            Create your account to get started
          </span>
        </div>
        {/* Signup google button */}
        <div className="mt-5">
          <Button
            variant="bordered"
            className="flex items-center justify-center gap-2 w-full px-10 py-1 rounded-[8px] border border-zinc-200 hover:bg-zinc-100"
          >
            <div className="flex items-center gap-2">
              <Icon icon="flat-color-icons:google" width="25" height="25" />
              <p>Sign up with Google</p>
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
          <div>
            <Input
              label="Full Name"
              name="fullName"
              type="text"
              value={formik.values.fullName}
              onValueChange={(value) => formik.setFieldValue("fullName", value)}
              isInvalid={!!(formik.touched.fullName && formik.errors.fullName)}
              onBlur={() => formik.setFieldTouched("fullName", true)}
              disabled={loading}
              className="w-full"
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div className="text-xs text-red-500 mt-1">
                {formik.errors.fullName}
              </div>
            )}
          </div>
          <div>
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
          <div>
            <Input
              label="Confirm password"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onValueChange={(value) =>
                formik.setFieldValue("confirmPassword", value)
              }
              isInvalid={
                !!(
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                )
              }
              onBlur={() => formik.setFieldTouched("confirmPassword", true)}
              disabled={loading}
              className="w-full"
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-xs text-red-500 mt-1">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="w-[300px] mt-2 bg-gradient-to-r from-amber-400 to-amber-300 text-white font-semibold"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
          </div>
        </form>

        {/* Signin link */}
        <div className="w-full text-center mt-6 text-sm">
          <span className="text-zinc-500">Already have an account? </span>
          <Link
            href="/signin"
            className="text-amber-500 font-medium hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
