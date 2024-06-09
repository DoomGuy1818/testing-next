type Props = {
  loginUser: Function;
  login: string;
  password: string;
};

export const handleLogin = async ({ loginUser, login, password }: Props) => {
  try {
    const result = await loginUser({ login, password }).unwrap();
    const data = result;
    console.log(data);
    const sessionId = result.id.replace(/"/g, "");
    localStorage.setItem("user", sessionId);
    // Обработайте результат
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
