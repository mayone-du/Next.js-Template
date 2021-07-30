import { Switch } from "@headlessui/react";
import { MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { memo } from "react";
import { useState } from "react";

export const ThemeChanger = memo(() => {
  const [isEnabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleLight = () => {
    return setTheme("light");
  };
  const handleDark = () => {
    return setTheme("dark");
  };
  return (
    <div>
      <p>The current theme is: {theme}</p>

      <div>
        <div className="py-16">
          <Switch
            checked={isEnabled}
            // eslint-disable-next-line react/jsx-handler-names
            onChange={setEnabled}
            className={`${isEnabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 bg-gray-400 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${isEnabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
          </Switch>
        </div>
        <MoonIcon />
        <button className="border" onClick={handleLight}>
          Light
        </button>
        <button className="border" onClick={handleDark}>
          dark
        </button>
      </div>
    </div>
  );
});

ThemeChanger.displayName = "ThemeChanger";
