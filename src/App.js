import Footer from "./сomponents/Footer/Footer";
import Header from "./сomponents/Header/Header";
import Card from "./сomponents/Card/Card";
import { TextContextProvider } from "./context/textContextProvider";
import { ImgContextProvider } from "./context/imgContextProvider";
import { HolidaysContextProvider } from "./context/holidaysContextProvider";

const App = () => {
  return (
    <div className="App">
      <HolidaysContextProvider>
        <ImgContextProvider>
          <TextContextProvider>
            <Header />
            <Card />
            <Footer />
          </TextContextProvider>
        </ImgContextProvider>
      </HolidaysContextProvider>
    </div>
  );
}

export default App;
