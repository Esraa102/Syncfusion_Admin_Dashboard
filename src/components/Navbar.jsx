/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../../public/assets/avatar.jpg";
import { useStateContext } from "../contexts/contextProvider";
const NavButton = ({ title, customFunction, color, icon, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunction}
      style={{ color }}
      className="relative p-3 rounded-full text-xl hover:bg-light-gray dark:hover:bg-gray-500 "
    >
      {icon}
      <span
        style={{ backgroundColor: dotColor }}
        className="w-3 h-3 absolute top-2 right-2 rounded-full"
      />
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const { setActiveMenue, handleClick, screenSize, setScreenSize } =
    useStateContext();
  const currentColor = localStorage.getItem("colorMode");
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setScreenSize]);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenue(false);
    } else {
      setActiveMenue(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-4 relative">
      <div className="flex items-center gap-4">
        <NavButton
          title={"Menue"}
          customFunction={() => setActiveMenue((prev) => !prev)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
      </div>
      <div className="flex items-center gap-4">
        <NavButton
          title={"Cart"}
          customFunction={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"Chat"}
          customFunction={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor={"#03c9D7"}
        />
        <NavButton
          title={"Notifications"}
          customFunction={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor={"#f00"}
        />
        <TooltipComponent content={"userProfiel"} position="BottomCenter">
          <div
            className="flex gap-2 p-1 cursor-pointer dark:hover:bg-gray-600 hover:bg-light-gray rounded-lg items-center"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="w-8 h-8 rounded-full"
              src={avatar}
              alt="avatar image"
            />
            <p className="text-gray-400 text-[14px]">
              <span>Hi, </span> <span className="font-bold">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-[14px]" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
