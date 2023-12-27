import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  AccumulationLegend,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../../public/assets/dummy";

const PieChart = () => {
  return (
    <AccumulationChartComponent
      id="pie-chart"
      className="cursor-pointer"
      enableSmartLabels={true}
      enableAnimation={true}
      tooltip={{ enable: true }}
    >
      <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          xName="x"
          yName="y"
          type="Pie"
          radius="90%"
          dataLabel={{
            visible: true,
            position: "Outside",
            name: "x",
          }}
          explode
          explodeOffset="10%"
          explodeIndex={2}
          innerRadius="40%"
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
