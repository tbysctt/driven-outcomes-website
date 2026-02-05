import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TripodPage } from "./pages/TripodPage";
import { MiniBossPage } from "./pages/MiniBossPage";
import { MiniBossHolidayPage } from "./pages/MiniBossHolidayPage";
import { SchoolsAndOrganisationsPage } from "./pages/SchoolsAndOrganisationsPage";
import { TalkNowPage } from "./pages/TalkNowPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { MeetTheTeamPage } from "./pages/MeetTheTeamPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { KickStartProgramPage } from "./pages/KickStartProgramPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="primary-school" element={<MiniBossPage />} />
        <Route path="programs/kick-start" element={<KickStartProgramPage />} />
        <Route path="secondary-school" element={<TripodPage />} />
        <Route path="oshc-and-holidays" element={<MiniBossHolidayPage />} />
        <Route path="talknow" element={<TalkNowPage />} />
        <Route path="schools-and-organisations" element={<SchoolsAndOrganisationsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="meet-the-team" element={<MeetTheTeamPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
