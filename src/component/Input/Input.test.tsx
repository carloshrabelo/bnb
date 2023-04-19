import { render } from "test-utils";
import { Input } from ".";

const props = {
  // label: "My Label",
  name: "My name",
};

describe("<Input/>", () => {
  describe("#render", () => {
    it("Should display the firsts pages", () => {
      const { queryByText } = render(<Input {...props} />);
      // expect(queryByText(props.label)).toBeInTheDocument();
      expect(queryByText(props.name)).not.toBeInTheDocument();
    });
  });
});
