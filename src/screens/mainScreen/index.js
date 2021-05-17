import css from "./_.module.css";
import HeaderToolbar from "../../component/bigComponent/headerToolbar";
import SearchContainer from "../../component/bigComponent/SearchContainer";
import Services from "../../component/bigComponent/services";
import SmartCardAbout from "../../component/bigComponent/smartCardAbout";
import AppIntoduction from "../../component/bigComponent/appIntoduction";
import AppDownloadGuide from "../../component/bigComponent/appDownloadGuide";
import Information from "../../component/bigComponent/Information";
import Footer from "../../component/bigComponent/Footer";

const MainScreen = () => {
  return (
    <div className={css.app}>
      <HeaderToolbar />
      <SearchContainer />
      <Services />
      <SmartCardAbout />
      <AppIntoduction />
      <AppDownloadGuide />
      <Information />
      <Footer />
    </div>
  );
};

export default MainScreen;
