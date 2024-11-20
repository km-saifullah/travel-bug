import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <section className="flex items-center justify-between">
          <section>
            <ul className="flex items-center gap-x-10">
              <Link href={"/"} className="nav-link">
                Home
              </Link>
              <Link href={"/about"} className="nav-link">
                About
              </Link>
              <Link href={"/destination"} className="nav-link">
                Destination
              </Link>
              <Link href={"/package"} className="nav-link">
                Tour Package
              </Link>
              <Link href={"/news"} className="nav-link">
                News
              </Link>
              <Link href={"/contact"} className="nav-link">
                Contact
              </Link>
            </ul>
          </section>
          <section>
            <div className="flex items-center gap-x-3 px-4 py-3 bg-slate-200 rounded-3xl">
              <IoSearchOutline className="text-3xl text-text" />
              <input
                type="text"
                placeholder="Destination, Attraction"
                className="bg-transparent w-[100%] outline-none border-none text-base text-primary font-nunito font-normal"
              />
            </div>
          </section>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
