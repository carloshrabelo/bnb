"use client";

import { Button } from "@/component/Button";
import Input from "@/component/Input";

import { ChangeEvent, FormEvent, useState } from "react";
import { ButtonPlace, Form } from "./style";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { decodeJwt } from "jose";

export default function Login() {
  const router = useRouter();
  const redirect = () => router.push("/");
  const { login } = useAuth({ onLogin: redirect });

  const [formData, setFormData] = useState({
    username: "admin@example.com",
    password: "admin",
  });

  const updateFormData = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));

  const authenticate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    login({
      username: data.get("username") as string,
      password: data.get("password") as string,
    });
  };

  return (
    <Form onSubmit={authenticate}>
      <Input
        value={formData.username}
        onChange={updateFormData}
        type="email"
        autoComplete="email"
        name="username"
        placeholder="admin@example.com"
        label="Username"
      />

      <Input
        value={formData.password}
        onChange={updateFormData}
        type="password"
        autoComplete="password"
        name="password"
        placeholder="Type your password"
        label="Password"
      />

      <ButtonPlace>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </ButtonPlace>
    </Form>
  );
}
