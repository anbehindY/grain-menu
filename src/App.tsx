import { useQuery } from "@apollo/client";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useEffect, useState } from "react";
import Loading from "./componets/Loading";
import Modal from "./componets/Modal";
import { GET_SECTIONS } from "./queries";
import { Item, Section } from "./types";

function App() {
  const { loading, error, data } = useQuery(GET_SECTIONS);
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const [activeItem, setActiveItem] = useState<Item | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data?.sections) {
      const sections: Section[] = data.sections.map((section: Section) => ({
        id: section.id,
        label: section.label,
        available: section.available,
        description: section.description,
        displayOrder: section.displayOrder,
        items: section.items,
      }));
      setSections(sections);
      setActiveSection(sections[0]?.id || "");
    }
  }, [data, loading, error]);

  useEffect(() => {
    console.log(sections);
  }, [sections]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const sectionHeights = sections.map(
      (section) => document.getElementById(`${section.id}`)?.offsetTop || 0
    );
    const currentSection = sectionHeights.findIndex(
      (_, i) => latest + 500 < (sectionHeights[i + 1] || Infinity)
    );

    setActiveSection(sections[currentSection]?.id || "");
  });

  if (loading) return <Loading />;
  if (error) return <p>Error : {error.message}</p>;

  const toggleModal = (id?: string) => {
    setIsOpen(!isOpen);
    if (id) {
      const item = sections
        .map((section) => section.items)
        .flat()
        .find((item) => item.id === id);
      setActiveItem(item || null);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full h-full bg-asthetic relative">
      {/* Sidebar */}
      <aside className="w-[25%] p-4 h-48 sticky top-10 left-20">
        <ul className="relative">
          {sections.map((section) => (
            <li
              key={section.id}
              className="flex h-12 justify-center items-center cursor-pointer"
              onClick={() => scrollToSection(section.id)}
            >
              <button
                className={clsx("flex items-center w-full text-left ", {
                  "text-red-500": activeSection === section.id,
                })}
              >
                <motion.div
                  className={clsx("w-[3px] h-12 bg-gray-200 mr-2", {
                    "!bg-red-500": activeSection === section.id,
                  })}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <p className="font-medium text-base">{section.label}</p>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Modal */}
      {isOpen && (
        <AnimatePresence>
          <Modal itemData={activeItem} onClose={toggleModal} />
        </AnimatePresence>
      )}

      {/* Main Content */}
      <main className="w-[72%] p-8 space-y-20">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={clsx("scroll-mt-10", {
              "opacity-25": !section.available,
            })}
          >
            <h2 className="text-2xl mb-4">{section.label}</h2>
            <p className="text-base">{section.description}</p>
            <div className="flex flex-wrap gap-8 mt-4">
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => toggleModal(item.id)}
                  className={clsx(
                    "rounded-lg shadow-lg w-72 overflow-hidden cursor-pointer",
                    {
                      "pointer-events-none":
                        !section.available || !item.available,
                    }
                  )}
                >
                  <div className="overflow-hidden h-80">
                    <img
                      draggable={false}
                      src="dummy.jpg"
                      alt="Product"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg">{item.label}</h3>
                    <p>{item.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium">${item.price}</p>
                      <motion.button
                        disabled={!item.available}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          alert("Added to cart");
                        }}
                        className={clsx(
                          "mt-2 bg-btn-red text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300",
                          {
                            "opacity-50": !item.available,
                          }
                        )}
                      >
                        <p>Add</p>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
