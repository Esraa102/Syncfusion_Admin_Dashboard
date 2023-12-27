import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/contextProvider";
import { userProfileData } from "../../public/assets/dummy";
import avatar from "../../public/assets/avatar.jpg";
import { Button } from "../components";
const UserProfile = () => {
  const { handleClose } = useStateContext();
  const currentColor = localStorage.getItem("colorMode");
  return (
    <div className="nav-item popup dark:text-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold" style={{ color: currentColor }}>
          User Profile
        </p>
        <TooltipComponent content={"close"} position="BottomCenter">
          <button
            type="button"
            className="text-2xl hover:drop-shadow-xl rounded-full
          hover:bg-light-gray p-2 dark:text-gray-200 dark:hover:bg-gray-600"
            onClick={() => {
              handleClose("userProfile");
            }}
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={avatar}
          className="w-[150px] h-[150px] rounded-full"
          alt="avatar"
        />
        <div>
          <p className="text-xl font-bold">Michael Roberts</p>
          <p className="text-gray-400 text-sm">Adminstartor</p>
          <p className="text-gray-400 text-sm">information.com</p>
        </div>
      </div>
      <div className="my-8">
        {userProfileData.map((item, index) => (
          <div key={index} className="flex items-center gap-3 mb-4">
            <button
              className="text-xl p-3 rounded-md"
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </button>
            <div>
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        color={"white"}
        bgColor={currentColor}
        isFull={true}
        borderRadius={"10px"}
        text={"Log Out"}
        size={"20px"}
      />
    </div>
  );
};

export default UserProfile;
