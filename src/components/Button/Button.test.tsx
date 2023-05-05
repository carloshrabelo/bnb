import { render } from "test-utils";
import Button from ".";

const props = {
  children: "Click me!",
};

describe("<Button/>", () => {
  describe("#render", () => {
    it("Should render Button Component", () => {
      const value = "Click me!";
      const { queryByText } = render(<Button {...props} />);
      expect(queryByText(value)).toBeInTheDocument();
    });
  });
});
