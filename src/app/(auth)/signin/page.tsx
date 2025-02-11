"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";

interface ErrorResponse {
  message: string;
  // Add other properties if needed
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/.test(
      password
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }
    if (!validatePassword(password)) {
      toast.error(
        "Password must be 8+ characters, with a number & special char"
      );
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      toast.error(axiosError.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl">
      <h1 className="text-2xl font-bold text-center text-white">Log In</h1>
      <p className="text-center text-gray-400 mb-6">
        Hey there, enter your details to log in
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-700 rounded-md focus:ring-1 outline-none focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-gray-700 rounded-md focus:ring-1 outline-none focus:ring-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Password"
        />
        <div className="text-right mb-4">
          <Link
            href="/auth/reset"
            className="text-sm text-purple-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-purple-500 text-white rounded-md hover:bg-purple-600"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <div className="text-center text-white my-4">Or Login with</div>
      <div className="flex justify-center gap-6">
        <button>
          <FcGoogle className="size-10" />
        </button>
        <button>
          <BsFacebook className="text-[#1877F2] size-9" />
        </button>
      </div>

      <div className="text-center text-gray-400 mt-4">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-purple-400 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
