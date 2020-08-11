import Helmet from "react-helmet";
import SignIn from "../../components/Login/SignIn";

export default function Index() {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #ececec" }}></Helmet>
      <SignIn />
    </div>
  );
}
