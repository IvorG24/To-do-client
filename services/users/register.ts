import Cookies from "js-cookie";
export const RegisterUser = async (
  data: RegisterProps,
  onSuccess: (status: boolean) => void,
  onError: (error: string) => void
) => {
  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (response.ok) {
      onSuccess(result?.data);
    } else {
      onError(result.data);
    }
  } catch (error) {
    onError("Failed to accept user.");
  }
};

export const login = async (
  data: LoginDataProps,
  onSuccess: (url: string) => void,
  onError: (error: string) => void
) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (response.ok) {
      const token = result.token; // Assuming the server responds with a token
      Cookies.set("token", token); // Set the token in the cookie or localStorage as appropriate
      onSuccess(result.url); // Redirect or handle successful login
    } else {
      onError(result.message); // Adjust this based on what your server sends on failure
    }
  } catch (error) {
    console.error("Login error:", error);
    onError("Failed to log in. Please try again."); // Generic error message
  }
};

export const signout = () => {
  Cookies.remove("token");
};

interface RegisterProps {
  email: string;
  password: string;
}
interface LoginDataProps {
  email: string;
  password: string;
}
