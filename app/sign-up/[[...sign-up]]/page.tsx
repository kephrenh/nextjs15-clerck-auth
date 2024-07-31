import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <section className="h-full flex justify-center items-center">
      <SignUp />
    </section>
  );
};

export default SignUpPage;
