import Header from './components/Header';
import Hero from './components/Hero';
import LifeBeyondDates from './components/LifeBeyondDates';
import LiteraryWorks from './components/LiteraryWorks';
import WorksDeepDive from './components/WorksDeepDive';
import GlobalJourney from './components/GlobalJourney';
import Polymath from './components/Polymath';
import Legacy from './components/Legacy';
import FinalSacrifice from './components/FinalSacrifice';

function App() {

  return (
    <div className="App w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <LifeBeyondDates />
        <LiteraryWorks />
        <WorksDeepDive />
        <GlobalJourney />
        <Polymath />
        <Legacy />
        <FinalSacrifice />
      </main>
      <footer className="bg-charcoal border-t border-gold/20 py-6 sm:py-8 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Dr. José Rizal: Life & Works
          </p>
          <p className="text-white/40 text-xs mt-2">
            A tribute to the national hero of the Philippines
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;