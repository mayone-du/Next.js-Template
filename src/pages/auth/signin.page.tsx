import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { useAuth } from "src/libs/hooks/useAuth";

const SignInPage: NextPage = () => {
  const { inputEmail, inputPassword, handleEmailChange, handlePasswordChange, handleSignIn } =
    useAuth();
  return (
    <Layout meta={{ pageName: "SignInPage" }}>
      <form className="border" onSubmit={handleSignIn}>
        <input type="email" value={inputEmail} onChange={handleEmailChange} />
        <input type="password" value={inputPassword} onChange={handlePasswordChange} />
        <button className="border" type="submit">
          SignIn
        </button>
      </form>
    </Layout>
  );
};

export default SignInPage;
