import { ChartsHeader } from "../../components";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../../public/assets/dummy";
const ColorMapping = () => {
  return (
    <div className="section dark:bg-secondary-dark-bg">
      <ChartsHeader
        category={"Color Mapping"}
        title={"USA CLIMATE - WEATHER BY MONTH"}
      />
      <div className="cursor-pointer">
        <ChartComponent
          className="w-full"
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          tooltip={{ enable: true }}
          legendSettings={{ background: "white" }}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
        ;
      </div>
    </div>
  );
};

export default ColorMapping;
