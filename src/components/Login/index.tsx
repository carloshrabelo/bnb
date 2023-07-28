"use client";

import Input from "@components/Input";

import { ChangeEvent, FormEvent, useState } from "react";
import { LoginParams } from "@/hooks/useAuth";
import { data } from "./mock";

interface Props {
  onLogin: (data: LoginParams) => void;
}

export default function Login({ onLogin }: Props) {
  const [formData, setFormData] = useState(data);

  const updateFormData = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));

  const authenticate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    onLogin({
      username: data.get("username") as string,
      password: data.get("password") as string,
    });
  };

  return (
    <form className="grid gap-xs" onSubmit={authenticate}>
      <Input
        value={formData.username}
        onChange={updateFormData}
        type="email"
        autoComplete="email"
        name="username"
        aria-label="username"
        placeholder="admin@example.com"
        label="Username"
      />

      <Input
        value={formData.password}
        onChange={updateFormData}
        type="password"
        autoComplete="password"
        name="password"
        aria-label="password"
        placeholder="Type your password"
        label="Password"
      />
      <div className="text-right">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
