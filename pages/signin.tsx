import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {};

const Signin = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex min-h-full h-full">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-15 w-64"
              src="https://i.ibb.co/XyDn57C/logo-4.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{' '}
              <Link href="signup">
                <a className="font-medium">Create new account</a>
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => formik.handleSubmit()}
                    className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Signin;