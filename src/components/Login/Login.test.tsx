import { render } from "test-utils";
import Login from ".";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useServerInsertedHTML: jest.fn(),
}));
// jest.mock("@/hooks/useAuth", () => ({
//   default: jest.fn()
// }))

describe("<Login/>", () => {
  describe("#render", () => {
    it("Should render Login Component", () => {
      const { queryByText } = render(<Login />);
      expect(queryByText("props.label")).not.toBeInTheDocument();
    });
  });
});
