import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Year,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../../public/assets/dummy";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="section">
      <Header category={"Apps"} title={"Calendar"} />
      <ScheduleComponent
        height={"650px"}
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Year,
            Month,
            Agenda,
            Resize,
            DragAndDrop,
          ]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
