import { render } from "test-utils";
import Input from ".";

const props = {
  label: "My Label",
  name: "My name",
};

describe("<Input/>", () => {
  describe("#render", () => {
    it("Should render Input Component", () => {
      const { queryByText } = render(<Input {...props} label="" />);
      expect(queryByText(props.label)).not.toBeInTheDocument();
    });

    it("Should render Input Component with label", () => {
      const { queryByText } = render(<Input {...props} />);
      expect(queryByText(props.label)).toBeInTheDocument();
    });
  });
});
