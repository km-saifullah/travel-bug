import { useTheme } from "@/context/ThemeContext";

const ToggleBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section
      className={`h-[200px] w-full ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"
      }`}
    >
      <ul className="flex items-center justify-center flex-col">
        <li>Home</li>
        <li>About</li>
        <li>Conatct</li>
      </ul>
    </section>
  );
};

export default ToggleBar;
