import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

// eslint-disable-next-line react/prop-types
const SparkLine = ({ id, height, currentColor, type, width, data, color }) => {
  return (
    <SparklineComponent
      className="cursor-pointer"
      id={id}
      height={height}
      width={width}
      dataSource={data}
      xName="x"
      yName="yval"
      lineWidth={1}
      type={type}
      valueType="Numeric"
      fill={color}
      border={{ color: { currentColor }, width: 2 }}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
