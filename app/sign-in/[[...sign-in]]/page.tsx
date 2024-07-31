import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <section className="h-full flex justify-center items-center">
      <SignIn />
    </section>
  );
};

export default SignInPage;
