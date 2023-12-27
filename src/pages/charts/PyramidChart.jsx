import { ChartsHeader } from "../../components";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../../public/assets/dummy";
const PyramidChart = () => {
  return (
    <div className="section dark:bg-secondary-dark-bg">
      <ChartsHeader category={"Pyramid"} title={"Pyramid Chart"} />
      <div className="cursor-pointer">
        <AccumulationChartComponent
          className="w-full"
          id="charts"
          tooltip={{ enable: true }}
          enableAnimation
          legendSettings={{ position: "Bottom" }}
        >
          <Inject
            services={[
              AccumulationLegend,
              PyramidSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              gapRatio={0.1}
              explode
              explodeOffset="5"
              explodeIndex={1}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
        ;
      </div>
    </div>
  );
};

export default PyramidChart;
