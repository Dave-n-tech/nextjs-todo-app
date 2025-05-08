import React from "react";
import loginImg from "../../public/assets/undraw_back_to_school_inwc 1 (1).png";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

const Login = () => {
  return (
    <section className="mx-6">
      <div className="place-items-center mb-16 md:mb-4">
        <h1 className="font-bold text-xl text-center mb-4 md:mb-4">Welcome back</h1>
        <Image src={loginImg} alt="" width={190} height={190} />
      </div>

      <form>
        <input
          type="email"
          name="Email"
          placeholder="Enter your Email"
          autoComplete="true"
          className="bg-white p-4 md:py-2 w-full rounded-full mb-6 md:mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          autoComplete="true"
          className="bg-white p-4 md:py-2 w-full rounded-full mb-6 md:mb-2"
        />
        <p className="text-green text-center md:p-0">Forgot password?</p>
        <Button label="Login" path="/dashboard"/>
      </form>
      <p className="text-center mt-2">
        Already have an account? 
        <Link href="/register" className="text-green cursor-pointer"> Sign up</Link>
      </p>
    </section>
  );
};

export default Login;
