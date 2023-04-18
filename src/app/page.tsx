"use client";

import { Button } from "@/component/Button";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { Main } from "./styles";

export default function Home() {
  const { refresh } = useRouter();
  const { logout } = useAuth({ onLogout: refresh });

  return (
    <Main>
      <Button color="error" onClick={logout}>
        Logout
      </Button>
    </Main>
  );
}
