import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const ToggleBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="container shadow-sm">
      <section
        className={`w-full ${
          theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"
        }`}
      >
        <ul
          className={`flex flex-col gap-x-10 space-y-2 px-3 py-3 ${
            theme == "dark" ? "text-white" : "text-primary}"
          }`}
        >
          <Link href={"/"} className={`nav-link`}>
            Home
          </Link>
          <Link href={"/about"} className={`nav-link`}>
            About
          </Link>
          <Link href={"/destination"} className={`nav-link`}>
            Destination
          </Link>
          <Link href={"/package"} className={`nav-link`}>
            Tour Package
          </Link>
          <Link href={"/news"} className={`nav-link`}>
            News
          </Link>
          <Link href={"/contact"} className={`nav-link`}>
            Contact
          </Link>
        </ul>
      </section>
    </section>
  );
};

export default ToggleBar;
