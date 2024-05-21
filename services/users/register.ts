export const RegisterUser = async (
  data: RegisterProps,
  onSuccess: (status: boolean) => void,
  onError: (error: string) => void
) => {
  try {
    const response = await fetch(`${process.env.EXPRESS_URL}/users`, {
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

interface RegisterProps {
  email: string;
  password: string;
}
