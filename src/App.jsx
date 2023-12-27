import { Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Stacked,
  PyramidChart,
  Customers,
  Kanban,
  Area,
  Pie,
  Bar,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Employees,
  Line,
} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/contextProvider";
import { Cart, UserProfile, Chat, Notification } from "./components";

function App() {
  const { activeMenue, themeSettings, setThemeSettings, isClicked } =
    useStateContext();
  const currentColor = localStorage.getItem("colorMode");
  const currentMode = localStorage.getItem("themeMode");
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex  relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "10000" }}>
          <TooltipComponent content="Settings" position="TopCenter">
            <button
              onClick={() => setThemeSettings(true)}
              type="button"
              className="text-2xl hover:drop-shadow-xl rounded-full hover:bg-light-gray text-white p-3"
              style={{ background: currentColor }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenue ? (
          <div className="w-72 sidebar fixed bg-white dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 bg-white dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg min-h-screen w-full
          ${activeMenue ? "md:ml-72" : "flex-1"} bg-main-bg overflow-x-hidden`}
        >
          <div className="fixed md:static bg-main-bg drop-shadow-sm  dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/orders" element={"Orders"} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<PyramidChart />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
        <div className="">
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.userProfile && <UserProfile />}
          {isClicked.notification && <Notification />}
        </div>
      </div>
    </div>
  );
}
export default App;
