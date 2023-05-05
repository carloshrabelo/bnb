"use client";

import Login from "@components/Login";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function Home() {
  const router = useRouter();
  const redirect = () => router.push("/");
  const { login } = useAuth({ onLogin: redirect });

  return <Login onLogin={login} />;
}
