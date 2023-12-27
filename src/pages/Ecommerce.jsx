import { StackedChart, Button, SparkLine } from "../components";
import { earningData, SparklineAreaData } from "../../public/assets/dummy";
import { GoDotFill } from "react-icons/go";

const Ecommerce = () => {
  const currentColor = localStorage.getItem("colorMode");
  return (
    <div className="mt-12">
      <div className="flex justify-center flex-wrap lg:flex-nowrap">
        <div className="hero">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-bold text-black">Earnings</p>
              <p className="text-2xl font-bold text-white">$29,208.243</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="18px"
            />
          </div>
        </div>
        <div
          className="flex flex-wrap gap-6 justify-center m-3
        "
        >
          {earningData.map((item, index) => (
            <div
              key={index}
              className="dark:text-gray-200 shadow-md
               bg-white dark:bg-secondary-dark-bg p-4 py-9 rounded-md text-center"
            >
              <button
                type="button"
                className="p-3 opacity-80 hover:drop-shadow-xl mx-auto h-12 flex items-center justify-center w-12 text-2xl rounded-full"
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
              >
                {item.icon}
              </button>
              <p className="my-3">
                <span className="font-semibold text-xl inline-block mr-3">
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        m-3 p-3 rounded-xl w-full"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="border-r-[1px] border-gray-200 m-4 pr-10">
              <div>
                <p className="flex items-center gap-3">
                  <span className="font-semibold text-3xl">$23,234</span>
                  <span className="text-sm cursor-pointer hover:drop-shadow-xl bg-green-400 text-white rounded-xl p-1">
                    %23
                  </span>
                </p>
                <p className="text-gray-400 mt-1">Budget</p>
              </div>
              <div className="mt-4">
                <p className="flex items-center gap-3">
                  <span className="font-semibold text-3xl">$44,234</span>
                </p>
                <p className="text-gray-400 mt-1">Expense</p>
              </div>
              <div className="mt-8">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color={"white"}
                  bgColor={currentColor}
                  text={"Download Report"}
                  borderRadius={"10px"}
                  size={"15px"}
                />
              </div>
            </div>
            <div className="mt-10 md:m-0">
              <StackedChart width={"320px"} height={"360px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
