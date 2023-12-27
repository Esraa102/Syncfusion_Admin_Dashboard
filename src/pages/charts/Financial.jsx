import { ChartsHeader } from "../../components";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Tooltip,
  Zoom,
  Crosshair,
  HiloSeries,
  DateTime,
  Logarithmic,
} from "@syncfusion/ej2-react-charts";
import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  financialChartData,
} from "../../../public/assets/dummy";
const Financial = () => {
  const date1 = new Date("2017, 1, 1");
  function filterValue(value) {
    if (value.x >= date1) {
      return value.x, value.high, value.low;
    }
  }
  const returnValue = financialChartData.filter(filterValue);
  return (
    <div className="section dark:bg-secondary-dark-bg">
      <ChartsHeader category={"Financial"} title={"Apple History"} />
      <div className="cursor-pointer">
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          enableAnimation
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Crosshair,
              Zoom,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
