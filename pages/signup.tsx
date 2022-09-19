import Link from 'next/link';
import React from 'react';
import { FormikConsumer, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

type Props = {};

const Signup = (props: Props) => {
  const sendData = async (data: any) => {
    try {
      const sentdata = await axios.post(
        'http://localhost:3000/api/user/signup',
        data,
      );
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      password: '',
      weight: '',
      height: '',
    },
    onSubmit: (values) => {
      sendData(values);
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please enter your first name'),
      lastName: Yup.string().required('Please enter your last name'),
      email: Yup.string().required('Please enter your email'),
      password: Yup.string().required('Please enter your password'),
      weight: Yup.number().required('Please enter your weight'),
      height: Yup.number().required('Please enter your height'),
    }),
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
              Create a new account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{' '}
              <Link href="signin">
                <a className="font-medium">Sign in to an exisit account</a>
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6">
                <div className="flex flex-row space-x-4">
                  <div className="basis-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        id="firstName"
                        name="firstName"
                        type="firstName"
                        autoComplete="firstName"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />

                      {formik.errors.firstName && formik.touched.firstName ? (
                        <div
                          className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                          role="alert"
                        >
                          {formik.errors.firstName}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="lastName"
                        name="lastName"
                        type="lastName"
                        autoComplete="lastName"
                        value={formik.values.lastName}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      {formik.errors.lastName && formik.touched.lastName ? (
                        <div
                          className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                          role="alert"
                        >
                          {formik.errors.lastName}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="gender"
                    name="gender"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={formik.values.gender}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    {formik.errors.gender && formik.touched.gender ? (
                      <div
                        className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                      >
                        {formik.errors.gender}
                      </div>
                    ) : null}
                  </select>
                </div>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div
                        className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                      >
                        {formik.errors.email}
                      </div>
                    ) : null}
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="current-password"
                      value={formik.values.password}
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <div
                        className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                      >
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="basis-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your weight
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.weight}
                        id="weight"
                        name="weight"
                        type="weight"
                        autoComplete="weight"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />

                      {formik.errors.weight && formik.touched.weight ? (
                        <div
                          className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                          role="alert"
                        >
                          {formik.errors.weight}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your height{' '}
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="height"
                        name="height"
                        type="height"
                        autoComplete="height"
                        value={formik.values.height}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      {formik.errors.height && formik.touched.height ? (
                        <div
                          className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                          role="alert"
                        >
                          {formik.errors.height}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <br />

                <div>
                  <button
                    onClick={() => formik.handleSubmit()}
                    type="button"
                    className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    Create
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
          src="https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
