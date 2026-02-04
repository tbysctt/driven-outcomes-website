import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TripodPage } from "./pages/TripodPage";
import { MiniBossPage } from "./pages/MiniBossPage";
import { MiniBossHolidayPage } from "./pages/MiniBossHolidayPage";
import { SchoolsAndOrganisationsPage } from "./pages/SchoolsAndOrganisationsPage";
import { TalkNowPage } from "./pages/TalkNowPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tripod" element={<TripodPage />} />
        <Route path="miniboss" element={<MiniBossPage />} />
        <Route path="miniboss-holiday" element={<MiniBossHolidayPage />} />
        <Route path="talknow" element={<TalkNowPage />} />
        <Route path="schools-and-organisations" element={<SchoolsAndOrganisationsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
