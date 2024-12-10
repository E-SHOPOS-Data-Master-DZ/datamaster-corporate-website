import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Footer } from "./components/Footer";
import "./i18n";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <Hero />
      <Expertise />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
