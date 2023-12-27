import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../public/assets/dummy.jsx";
import { useStateContext } from "../contexts/contextProvider.jsx";

const Sidebar = () => {
  const { activeMenue, setActiveMenue, screenSize } = useStateContext();
  const handleCloseSidbar = () => {
    if (activeMenue && screenSize <= 900) {
      setActiveMenue(false);
    }
  };
  const currentColor = localStorage.getItem("colorMode");
  return (
    <div className="pb-10 ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto">
      {activeMenue && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidbar}
              className="items-center flex gap-2 px-4 py-6 text-xl font-extrabold dark:text-white text-slate-900"
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Close Menue" position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  setActiveMenue((prev) => !prev);
                }}
                className="text-2xl p-2 hover:bg-light-gray dark:hover:bg-gray-500  rounded-full hover:drop-shadow-xl block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            <ul>
              {links.map((link, index) => (
                <div
                  className="text-gray-400 m-3 my-8 uppercase text-xl"
                  key={index}
                >
                  {link.title}
                  {link.links.map((item, index) => (
                    <NavLink
                      key={index}
                      to={`/${item.name}`}
                      className={({ isActive }) =>
                        `link ${isActive ? "text-white hover:text-white" : ""}`
                      }
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
                      onClick={handleCloseSidbar}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
