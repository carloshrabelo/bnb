import userEvent from "@testing-library/user-event";
import { render } from "test-utils";
import Login from ".";
import { data } from "./mock";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useServerInsertedHTML: jest.fn(),
}));

const mockOnLogin = jest.fn();

describe("<Login/>", () => {
  describe("#render", () => {
    it("Should render Login Component", () => {
      const { queryByText } = render(<Login onLogin={mockOnLogin} />);
      expect(queryByText("props.label")).not.toBeInTheDocument();
    });
  });

  describe("#onLogin", () => {
    it("Should render Login Component", async () => {
      const { queryByText, queryByLabelText } = render(
        <Login onLogin={mockOnLogin} />
      );

      const username = queryByLabelText("username")!;
      const password = queryByLabelText("password");
      // const submit = queryByText("Submit")
      const submit = queryByText("Submit");

      expect(username).toBeInTheDocument();

      userEvent.type(username, "o");

      submit?.click();

      expect(mockOnLogin).toBeCalledWith({
        password: "admin",
        username: data.username + "o",
      });
    });
  });
});
