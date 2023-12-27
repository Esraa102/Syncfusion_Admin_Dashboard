import { ChartsHeader, StackedChart } from "../components";

const Stacked = () => {
  return (
    <div className="section dark:bg-secondary-dark-bg">
      <ChartsHeader category={"Stacked"} title={"Revenue Breakdown"} />
      <div className="cursor-pointer">
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
