"use client";

import React, {useState} from "react";
import Link from "next/link";
import {Button, Input} from "@heroui/react";
import {EyeIcon, EyeSlashIcon} from "@phosphor-icons/react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {FormikFieldProps, SignInFormValues} from "@/types/auth";

// Validation schema
const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Mật khẩu là bắt buộc"),
});

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: SignInFormValues) => {
    setIsLoading(true);
    try {
      // TODO: Implement sign in logic here
      console.log("Sign in values:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Redirect to dashboard after successful login
      alert("Đăng nhập thành công!");
    } catch (error) {
      console.error("Sign in error:", error);
      alert("Đăng nhập thất bại!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Đăng nhập
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Hoặc{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            tạo tài khoản mới
          </Link>
        </p>
      </div>

      <Formik
        initialValues={{email: "", password: ""}}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({errors, touched, isSubmitting}) => (
          <Form className="space-y-4">
            <div>
              <Field name="email">
                {({field}: {field: FormikFieldProps}) => (
                  <Input
                    {...field}
                    type="email"
                    label="Email"
                    placeholder="Nhập email của bạn"
                    variant="bordered"
                    isInvalid={!!(errors.email && touched.email)}
                    errorMessage={
                      errors.email && touched.email ? errors.email : ""
                    }
                    classNames={{
                      input: "bg-transparent",
                      inputWrapper:
                        "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                    }}
                  />
                )}
              </Field>
            </div>

            <div>
              <Field name="password">
                {({field}: {field: FormikFieldProps}) => (
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu của bạn"
                    variant="bordered"
                    isInvalid={!!(errors.password && touched.password)}
                    errorMessage={
                      errors.password && touched.password ? errors.password : ""
                    }
                    endContent={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                        ) : (
                          <EyeIcon className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    }
                    classNames={{
                      input: "bg-transparent",
                      inputWrapper:
                        "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                    }}
                  />
                )}
              </Field>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  Quên mật khẩu?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              isLoading={isLoading || isSubmitting}
              disabled={isLoading || isSubmitting}
            >
              {isLoading || isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </Form>
        )}
      </Formik>

      {/* Social Login - Optional */}
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
              Hoặc đăng nhập với
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button
            variant="bordered"
            className="w-full border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="ml-2">Google</span>
          </Button>

          <Button
            variant="bordered"
            className="w-full border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="ml-2">Facebook</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
