import Fullscreen from './components/Sections/Fullscreen/Fullscreen';
import Header from './components/Header/Header';
import Cases from './components/Sections/Cases/Cases';
import Prices from './components/Sections/Prices/Prices';
import Contacts from './components/Sections/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Fullscreen />
      <Header />

      <Cases />
      <Prices />
      <Contacts />

      <Footer />
    </div>
  );
}

export default App;
