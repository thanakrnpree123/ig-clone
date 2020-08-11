import LoginPage from "./login/loginPage";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

export default function Home() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}
