"use client";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface FormValues {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
}

interface UserState {
  email: string;
}

const Page = () => {
  const email = useSelector((state: UserState) => state.email);
  const router = useRouter();

  const formik = useFormik<FormValues>({
    initialValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: ""
    },
    validationSchema: Yup.object({
      otp1: Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a number"),
      otp2: Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a number"),
      otp3: Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a number"),
      otp4: Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a number")
    }),
    onSubmit: async (values) => {
      const otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email`,
          { email, otp }
        );
        console.log("Verification Response:", response.data);
        if (response.status === 200 || response.status === 201) {
          router.push("/");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error(
            "Error verifying OTP:",
            error.response?.data || error.message
          );
        } else {
          console.error("Unexpected Error:", error);
        }
      }
    }
  });

  const handleResend = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/resend-verification-otp`,
        { email }
      );
      console.log("Resend OTP Response:", response.data);
      toast.success("OTP Resent Successfully. Kindly check your email.");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error resending OTP:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full mx-auto">
      <form
        className="shadow-md px-4 py-6 bg-gray-100 rounded-md min-w-[25rem] min-h-[13rem]"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex justify-center items-center gap-7 pt-5 pb-12">
          {["otp1", "otp2", "otp3", "otp4"].map((field) => (
            <div key={field} className="flex flex-col items-center">
              <input
                className={`w-12 h-12 text-center border rounded-md shadow-sm focus:border-primary focus:ring-primary ${
                  formik.errors[field as keyof FormValues] &&
                  formik.touched[field as keyof FormValues]
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                maxLength={1}
                inputMode="numeric"
                autoComplete="one-time-code"
                {...formik.getFieldProps(field)}
              />
              {formik.errors[field as keyof FormValues] &&
                formik.touched[field as keyof FormValues] && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors[field as keyof FormValues]}
                  </p>
                )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-primary hover:opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Verify
          </button>
          <button
            type="button"
            className="inline-block align-baseline font-bold text-sm text-primary hover:opacity-90 ml-4"
            onClick={handleResend}
          >
            Resend OTP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
