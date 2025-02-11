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
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("member");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
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
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        { email, password, role },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      toast.error(
        axiosError.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center text-white">Sign Up</h1>
      <p className="text-center text-gray-400 mb-6">
        Hey there, enter your details to create your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-white"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          aria-label="Confirm Password"
        />

        <select
          className="w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="member">Sign up as Member</option>
          <option value="barber">Sign up as Barber</option>
        </select>

        <button
          type="submit"
          className="w-full p-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition disabled:bg-purple-700"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="text-center text-white my-4">Or Sign up with</div>
      <div className="flex justify-center gap-6">
        <button type="button">
          <FcGoogle className="size-10" />
        </button>
        <button type="button">
          <BsFacebook className="text-[#1877F2] size-9" />
        </button>
      </div>

      <div className="text-center text-gray-400 mt-4">
        Already have an account?{" "}
        <Link href="/signin" className="text-purple-400 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Login;
