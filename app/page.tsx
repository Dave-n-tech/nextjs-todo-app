import Image from "next/image";
import SplashImg from "../public/assets/undraw_done_checking_re_6vyx 1.png";
import Button from "./components/Button";

export default function Home() {
  return (
    <section className="z-30 mx-6 flex flex-col gap-14 md:gap-2 items-center">
      <div className="place-items-center">
        <Image
          src={SplashImg}
          alt="App logo"
          width={200}
          height={200}
          className="mb-10 md:mb-4"
        />
        <div>
          <h1 className="font-bold text-xl text-center mb-4">
            Get things done TODS
          </h1>
          <p className="text-center mx-12">
            Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
            Consequat urna quam felis interdum quisque. Malesuada adipiscing
            tristique ut eget sed.
          </p>
        </div>
      </div>

      <Button label="Get Started" path="/register" />
    </section>
  );
}
