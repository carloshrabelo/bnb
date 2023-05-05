import userEvent from "@testing-library/user-event";
import { screen, render, cleanup } from "test-utils";
import Page from "./page";

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

// jest.mock("@/hooks/useAuth", () => ({
//   default: jest.fn()
// }))

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

      const username = screen.getByLabelText(/username/i);

      // const username = queryByLabelText("username")!
      const password = queryByLabelText("password");
      // const submit = queryByText("Submit")
      const submit = queryByText("Submit");

      expect(username).toBeInTheDocument();

      userEvent.type(username, "o");
      expect(username).toHaveValue("admin@example.como");

      submit?.click();

      // expect(username).toBeInTheDocument();
      expect(mocklogin).toBeCalledWith({
        password: "admin",
        username: "admin@example.como",
      });
    });
  });
});
