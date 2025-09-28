import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/NavBar";
import AppRoutes from "./routes";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-6">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
