import { userEvent, render, cleanup } from "test-utils";
import Page from "./page";
import { data } from "@components/Login/mock";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useServerInsertedHTML: jest.fn(),
}));

afterEach(cleanup);

const mocklogin = jest.fn();

jest.mock("@/hooks/useAuth", () => () => ({
  token: "",
  isLoading: false,
  login: mocklogin,
  logout: jest.fn(),
}));

describe("<Page/>", () => {
  describe("#render", () => {
    it("Should render Page Component", () => {
      const { queryByText } = render(<Page />);
      expect(queryByText("props.label")).not.toBeInTheDocument();
    });
  });

  describe("#onLogin", () => {
    it("Should render Login Component", async () => {
      const { queryByText, queryByLabelText } = render(<Page />);

      const username = queryByLabelText("username")!;
      const password = queryByLabelText("password")!;

      const submit = queryByText("Submit");

      expect(username).toBeInTheDocument();
      expect(password).toBeInTheDocument();

      userEvent.type(username, "o");
      userEvent.type(password, "0");

      submit?.click();

      expect(mocklogin).toBeCalledWith({
        username: data.username + "o",
        password: data.password + "0",
      });
    });
  });
});
