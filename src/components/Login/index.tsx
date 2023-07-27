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
      <div
        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p className="font-bold">Our privacy policy has changed</p>
            <p className="text-sm">
              Make sure you know how these changes affect you.
            </p>
          </div>
        </div>
      </div>

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
