import { PieChart, ChartsHeader } from "../../components";

const Pie = () => {
  return (
    <div className="section dark:bg-secondary-dark-bg">
      <ChartsHeader category={"Pie"} title={"Inflation Rate In Percentage"} />
      <div>
        <PieChart />
      </div>
    </div>
  );
};

export default Pie;
