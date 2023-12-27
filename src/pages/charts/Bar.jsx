import { ChartsHeader, BarChart } from "../../components";

const Bar = () => {
  return (
    <div className="section dark:bg-secondary-dark-bg">
      <ChartsHeader category={"Bar"} title={"Inflation Rate"} />
      <div>
        <BarChart />
      </div>
    </div>
  );
};

export default Bar;
