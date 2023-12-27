import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../../public/assets/dummy";
import { useStateContext } from "../contexts/contextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, setThemeSettings } = useStateContext();
  const currentColor = localStorage.getItem("colorMode");
  const currentMode = localStorage.getItem("themeMode");
  return (
    <div className="bg-half-transparent nav-item w-screen fixed top-0 right-0 ">
      <div
        className="float-right h-screen dark:text-gray-200 bg-white 
      w-full md:w-[400px] dark:bg-[#484b52]"
      >
        <div className="flex items-center justify-between p-4 ml-4">
          <p className="text-2xl font-semibold">Settings</p>
          <TooltipComponent content={"close"} position="BottomCenter">
            <button
              type="button"
              onClick={() => {
                setThemeSettings(false);
              }}
              className="text-2xl p-2 rounded-full hover:drop-shadow-xl
            hover:bg-light-gray dark:hover:bg-[#646669]"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className="flex flex-col border-t-[1px] border-gray-200 p-4 ml-4">
          <p className="text-lg font-semibold">Theme Options</p>
          <div className="mt-4">
            <div className="mb-2">
              <input
                type="radio"
                className="cursor-pointer"
                id="light"
                name="theme"
                value="Light"
                onChange={setMode}
                checked={currentMode === "Light"}
              />
              <label
                className="text-[16px] font-semibold ml-3 cursor-pointer"
                htmlFor="light"
              >
                Light
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="cursor-pointer"
                name="theme"
                value="Dark"
                id="dark"
                onChange={setMode}
                checked={currentMode === "Dark"}
              />
              <label
                className="text-[16px] font-semibold ml-3 cursor-pointer"
                htmlFor="dark"
              >
                Dark
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-[1px] border-gray-200 p-4 ml-4">
          <p className="text-lg font-semibold">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="relative mt-3 cursor-pointer
                flex gap-5 items-center"
                >
                  <button
                    type="button"
                    className="h-6 w-6 rounded-full"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`text-white text-2xl
                    ${item.color === currentColor ? "block" : "hidden"}`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
