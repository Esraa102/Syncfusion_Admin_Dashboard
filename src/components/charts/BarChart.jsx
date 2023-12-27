import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  Category,
  DataLabel,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../../public/assets/dummy";

const BarChart = () => {
  return (
    <ChartComponent
      className="cursor-pointer"
      id="bar-chart"
      height="420px"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject
        services={[
          DateTime,
          Legend,
          Tooltip,
          Category,
          ColumnSeries,
          DataLabel,
        ]}
      />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default BarChart;
