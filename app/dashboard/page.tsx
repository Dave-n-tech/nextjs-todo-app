import React from "react";
import profileImg from "../../public/assets/Ellipse 3.png";
import clockImg from "../../public/assets/clock.png";
import Image from "next/image";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  return (
    <section className="w-full relative mb-4">
      <div className="button-color w-full h-[28rem] pb-4 flex flex-col items-center justify-end">
        <Image src={profileImg} alt="" width={80} height={80} className="z-30"/>
        <h1 className="font-bold text-xl text-white mt-2">Welcome Jeegar Goyani</h1>
      </div>
      <div className="flex flex-col items-center mb-2">
        <p className="font-bold text-right w-full px-4 mt-2">Good afternoon</p>
        <Image src={clockImg} alt="clock image" width={100} height={100} />
      </div>
      <div className="px-4 pb-0">
        <h1 className="font-bold text-left mb-4">Task List</h1>
        <TaskList />
      </div>
    </section>
  );
};

export default Dashboard;
