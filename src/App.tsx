import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { OffersTable } from "./components/OffersTable/OffersTable";

function App() {

  return (
    <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-900 md:p-8">
      <div className="mx-auto container">
        <Header />

        <OffersTable />

        <Footer />
      </div>
    </div>
  );
}

export default App;
