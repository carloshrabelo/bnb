import useSWRMutation, { MutationFetcher } from "swr/mutation";

type Token = string;

export interface LoginParams {
  username: string;
  password: string;
}

interface Props {
  onLogin?: () => void;
  onLogout?: () => void;
}

const headers = {
  "Content-Type": "application/json",
};

const sendRequest: MutationFetcher<Token, LoginParams, () => string> = async (
  url,
  { arg }
) => {
  const { method = "POST", ...body } = arg as LoginParams & {
    method?: "POST" | "DELETE";
  };

  const res = await fetch(url, {
    method,
    headers,
    body: method === "DELETE" ? null : JSON.stringify(body),
  });
  const response = await res.text();

  return !res.ok ? Promise.reject(new Error(response)) : response;
};

export const useAuth = ({ onLogin, onLogout }: Props = {}) => {
  const { data, trigger, isMutating, ...rest } = useSWRMutation(
    "/api/auth",
    sendRequest,
    {
      onSuccess: onLogin,
      throwOnError: false,
    }
  );

  return {
    ...rest,
    token: data,
    isLoading: isMutating,
    login: trigger,
    logout: () =>
      trigger({ method: "DELETE" } as unknown as LoginParams, {
        onSuccess: onLogout,
      }),
  };
};

export default useAuth;
