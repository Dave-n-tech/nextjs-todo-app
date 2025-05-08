import React from "react";
import Button from "../components/Button";
import Link from "next/link";

const Register = () => {
  return (
    <section className="mx-6">
      <div className="mb-10">
        <h1 className="font-bold text-xl text-center mb-2">Welcome Onboard</h1>
        <p className="text-center px-20 text-gray-500 text-[14px]">Let's help to meet up with your tasks</p>
      </div>

      <form className="w-full">
        <input type="text" name="fullname" placeholder="Enter your fullname" autoComplete="true" className="bg-white p-4 md:py-2 w-full rounded-full mb-6 md:mb-2"/>
        <input type="email" name="Email" placeholder="Enter your Email" autoComplete="true" className="bg-white p-4 md:py-2 w-full rounded-full mb-6 md:mb-2"/>
        <input type="password" name="password" placeholder="Enter password" autoComplete="true" className="bg-white p-4 md:py-2 w-full rounded-full mb-6 md:mb-2"/>
        <input type="password" name="confirm password" placeholder="Confirm password" autoComplete="true" className="bg-white p-4 md:py-2 w-full rounded-full mb-6 md:mb-2"/>
        <Button  label="Register" path="/dashboard"/>
      </form>
      <p className="text-center mt-2">Already have an account? <Link href="/login" className="text-green cursor-pointer">Sign in</Link></p>
    </section>
  );
};

export default Register;
