import { useTheme } from "next-themes";
import { memo } from "react";

export const ThemeChanger = memo(() => {
  const { theme, setTheme } = useTheme();
  const handleLight = () => {
    setTheme("light");
  };
  const handleDark = () => {
    return setTheme("dark");
  };
  return (
    <div>
      <p>The current theme is: {theme}</p>

      <div>
        <button className="border" onClick={handleLight}>
          Light
        </button>
        <button className="border" onClick={handleDark}>
          Dark
        </button>
      </div>
    </div>
  );
});

ThemeChanger.displayName = "ThemeChanger";
