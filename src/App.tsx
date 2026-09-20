import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Loader from "./components/Loader.tsx";
import TechGrid from "./components/TechGrid.tsx";
import YourStack from "./components/YourStack.tsx";
import Footer from "./components/Footer.tsx";
import type { Technology } from "./types";
import "./App.css";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  // Load the technology data from the JSON file (not hardcoded in the
  // component) with a brief loading state.
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technology data.");
        setLoading(false);
      });
  }, []);

  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack]);

  const handleAdd = (tech: Technology) => {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const removed = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Stack cleared.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <main
        id="technologies"
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Explore the Technologies
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Pick the tools that fit your project and build your ideal stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {loading ? (
            <Loader />
          ) : (
            <TechGrid
              technologies={technologies}
              stackIds={stackIds}
              onAdd={handleAdd}
            />
          )}

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
