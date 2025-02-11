"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiLoader4Fill } from "react-icons/ri";
import axios from "axios";
interface ContactUsProps {
  bg: string;
}
const ContactUs: React.FC<ContactUsProps> = ({ bg }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      phone: Yup.string().required("Required"),
      message: Yup.string().required("Required")
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post("YOUR_API_ENDPOINT", values);
        console.log("Form data submitted successfully", response);
      } catch (error) {
        console.error("Form submission failed", error);
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <section className={`${bg} flex justify-center py-[2rem]`}>
      <div className="grid grid-cols-12 gap-10 w-full max-w-[99%] sm:max-w-[98%] md:max-w-[96%] lg:max-w-[94%]">
        <div className="col-span-7  bg-[#343434] rounded-tl-[2rem] rounded-br-[2rem]">
          <form
            onSubmit={formik.handleSubmit}
            className=" mx-auto px-[2rem] py-[2.5rem]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-white mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-3 bg-[#1a1a1a] rounded-lg text-white focus:ring-2 focus:ring-purple-600 ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-3 bg-[#1a1a1a] rounded-lg text-white focus:ring-2 focus:ring-purple-600 ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-3 bg-[#1a1a1a] rounded-lg text-white focus:ring-2 focus:ring-purple-600 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-white mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-3 bg-[#1a1a1a] rounded-lg text-white focus:ring-2 focus:ring-purple-600 ${
                    formik.touched.phone && formik.errors.phone
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.phone}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 h-40 bg-[#1a1a1a] rounded-lg text-white focus:ring-2 focus:ring-purple-600 ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                disabled={loading}
                type="submit"
                className="mt-6 py-3 px-[2rem] bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                {loading ? (
                  <div className="flex justify-center items-center gap-2">
                    <RiLoader4Fill className="animate-spin text-xl" />
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-5 font-nunito flex flex-col gap-[1rem] justify-center items-start">
          <h1 className="font-nunito text-center rounded-sm py-[0.3rem] w-[10rem] bg-primary text-2xl font-[1000] ">
            Contact Us
          </h1>

          <p className="text-justify leading-5">We Are Here to Support You</p>
          <p className="text-justify leading-7">
            Customer support is our highest priority. We’re here to answer all
            your questions via our 24/7 Live Chat and Support line that calls
            straight into Mark’s personal phone.
          </p>
          <span className="text-white">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - -
          </span>
          <div className="flex items-center space-x-2">
            <input
              className="accent-primary w-[1rem]  h-[1rem]"
              type="checkbox"
            />
            <p className="text-white text-sm">
              By submitting, you accept our{" "}
              <span className="text-purple-400 underline cursor-pointer">
                Terms and Conditions
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
