import { MdOutlineLocalPhone } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { LuSunDim } from "react-icons/lu";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container">
        <section className="flex items-center justify-between">
          <section className="flex items-center gap-x-3">
            <div className="w-[35px] h-[35px] bg-secondary text-white rounded-full flex items-center justify-center text-xl">
              <MdOutlineLocalPhone />
            </div>
            <div>
              <p className="font-normal font-nunito text-base text-text">
                Call from anywhere
              </p>
              <h4 className="font-semibold font-nunito text-base">
                +880 2345678900
              </h4>
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-primary font-roboto">
              <span className="text-secondary">Travel</span>Bug
            </h2>
          </section>
          <section className="flex items-center gap-x-4">
            <div className="px-3 py-2 border rounded-3xl flex items-center gap-x-2">
              <CiGlobe />
              <button>English</button>
            </div>
            <div>
              <p>|</p>
            </div>
            <div>
              <button className="px-5 py-2 border rounded-3xl text-base font-normal font-roboto text-primary">
                Sign In
              </button>
            </div>
            <div>
              <button className="px-5 py-2 border rounded-3xl bg-btnBg text-white font-roboto font-normal text-base hover:transition-all hover:duration-300 hover:ease-linear hover:bg-white hover:text-primary hover:border">
                Sign Up
              </button>
            </div>
            <div className="cursor-pointer">
              <LuSunDim className="text-text font-normal text-3xl" />
            </div>
          </section>
        </section>
        <div className="border-b mt-5"></div>
      </div>
    </header>
  );
};

export default Header;
