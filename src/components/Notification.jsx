import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/contextProvider";
import { Button } from "../components";
import { chatData } from "../../public/assets/dummy";
const Notification = () => {
  const { handleClose } = useStateContext();
  const currentColor = localStorage.getItem("colorMode");
  return (
    <div className="nav-item popup">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold" style={{ color: currentColor }}>
          Notifications
        </p>
        <TooltipComponent content={"close"} position="BottomCenter">
          <button
            type="button"
            className="text-2xl hover:drop-shadow-xl rounded-full
      hover:bg-light-gray p-2 dark:text-gray-200 dark:hover:bg-gray-600"
            onClick={() => {
              handleClose("notification");
            }}
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className="my-8">
        {chatData.map((item, index) => (
          <div key={index} className="flex gap-3 items-center my-4">
            <img
              src={item.image}
              className="w-[50px] h-[50px] rounded-full"
              alt="image"
            />
            <div>
              <p className="text-lg font-semibold text-black dark:text-gray-200">
                {item.message}
              </p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
              <p className="text-gray-400 text-sm">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        color={"white"}
        bgColor={currentColor}
        isFull={true}
        borderRadius={"10px"}
        text={"See All Messages"}
        size={"20px"}
      />
    </div>
  );
};

export default Notification;
