import { render, RenderOptions } from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

import EmotionRRegistry from "@lib/emotion";

const customRender = (
  node: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  const rendered = render(<EmotionRRegistry>{node}</EmotionRRegistry>, options);

  return {
    ...rendered,
    rerender: (
      ui: React.ReactElement,
      options?: Omit<RenderOptions, "queries">
    ) => customRender(ui, { container: rendered.container, ...options }),
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
