import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { useAuth } from "src/libs/hooks/useAuth";

const SignUpPage: NextPage = () => {
  const { inputEmail, inputPassword, handleEmailChange, handlePasswordChange, handleSignUp } =
    useAuth();
  return (
    <Layout meta={{ pageName: "SignUp" }}>
      <form className="border" onSubmit={handleSignUp}>
        <input type="email" value={inputEmail} onChange={handleEmailChange} />
        <input type="password" value={inputPassword} onChange={handlePasswordChange} />
        <button className="border" type="submit">
          SignUp
        </button>
      </form>
    </Layout>
  );
};

export default SignUpPage;
