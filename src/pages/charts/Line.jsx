import { LineChart, ChartsHeader } from "../../components";

const Line = () => {
  return (
    <div className="section dark:bg-secondary-dark-bg">
      <ChartsHeader category={"Line"} title={"Inflation Rate"} />
      <div>
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
