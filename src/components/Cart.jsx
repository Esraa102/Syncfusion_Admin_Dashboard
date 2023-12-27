import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/contextProvider";
import { cartData } from "../../public/assets/dummy";
import { Button } from "../components";
const Cart = () => {
  const { handleClose } = useStateContext();
  const currentColor = localStorage.getItem("colorMode");
  return (
    <div className="nav-item bg-half-transparent nav-item w-screen fixed top-0 right-0">
      <div
        className="float-right h-screen dark:text-gray-200 bg-white 
      w-full md:w-[400px] dark:bg-[#484b52] p-4"
      >
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold" style={{ color: currentColor }}>
            Shopping Cart
          </p>
          <TooltipComponent content={"close"} position="BottomCenter">
            <button
              type="button"
              className="text-2xl hover:drop-shadow-xl rounded-full
          hover:bg-light-gray p-2 dark:text-gray-200 dark:hover:bg-gray-400"
              onClick={() => {
                handleClose("cart");
              }}
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className="mt-8">
          {cartData.map((item, index) => (
            <div key={index} className="my-4 flex items-center gap-3">
              <img
                src={item.image}
                className="w-[80px] h-[80px] rounded-xl"
                alt="product"
              />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-400">{item.category}</p>
                <div className="flex items-center gap-3 mt-4">
                  <p className="text-lg font-bold">{item.price}</p>
                  <div style={{ color: currentColor }} className="font-bold">
                    <button className="px-2 py-1 border mr-2">-</button>
                    <span className="px-2 py-1 border mr-2">0</span>
                    <button className="px-2 py-1 border mr-2">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-sm">Sub Total</p>
            <p className="text-lg font-bold">$434</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-sm">Total Price</p>
            <p className="text-lg font-bold">$900</p>
          </div>
          <div className="text-center">
            <Button
              color={"white"}
              bgColor={currentColor}
              text={"Purchase an order"}
              borderRadius={"10px"}
              size={"20px"}
              isFull={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
