import useAuth from "./useAuth";
import { act, renderHook, waitFor } from "@testing-library/react";

const token = "MyToken";

beforeEach(() => {
  fetch.resetMocks();
});

describe("useAuth", () => {
  it("Should render Login Component", async () => {
    const { result } = renderHook(() => useAuth());

    // jest.mock(fetch)
    fetch.mockResponseOnce(token);

    act(() => {
      result.current.login({
        username: "",
        password: "",
      });
    });

    await waitFor(() => result.current.isLoading);
    await waitFor(() => !result.current.isLoading);

    expect(result.current.token).toBe(token);
  });
});
