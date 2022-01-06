import { useRouter } from "next/router";
import SignInPresenter from "./SignIn.presenter";

const SignInContainer = () => {
  const router = useRouter();
  const onClickSignUp = () => {
    router.push(`/signUp`);
  };
  return <SignInPresenter />;
};

export default SignInContainer;
