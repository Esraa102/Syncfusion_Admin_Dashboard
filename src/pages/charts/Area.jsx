import { ChartsHeader, AreaChart } from "../../components";

const Area = () => {
  return (
    <div className="section dark:bg-secondary-dark-bg">
      <ChartsHeader category={"Area"} title={"Inflation Rate In Percentage"} />
      <AreaChart />
    </div>
  );
};

export default Area;
