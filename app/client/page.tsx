"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ClientPage = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const username = `${user?.username?.charAt(0).toUpperCase()}` + `${user?.username?.slice(1)}`;

  return (
    <section className="h-full flex justify-center items-center">
      <h1>Hello, {username} welcome to Clerk</h1>
    </section>
  );
};

export default ClientPage;
