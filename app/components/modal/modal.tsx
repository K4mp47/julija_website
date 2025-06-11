import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// const ExampleWrapper = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="px-4 py-64 bg-slate-900 grid place-content-center">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
//       >
//         Open Modal
//       </button>
//       <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
//     </div>
//   );
// };

interface SpringModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  src?: string | null;
  title?: string;
  descr?: string;
}

const SpringModal = ({ isOpen, setIsOpen, src, title, descr }: SpringModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0,  }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-700/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-hidden cursor-pointer"
        >
          <motion.div
            initial={{ scale: 1, translateX: "-50%" }}
            animate={{ scale: 1, translateX: "0%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ scale: 1, translateY: "50%" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white backdrop-blur text-gray-700 rounded-lg w-full max-w-lg sm:max-w-2xl md:max-w-5xl shadow-xl cursor-default relative scrollbar-none overflow-y-auto md:max-h-5xl"
            style={{ maxHeight: "90vh" }}
          >
            
            <div className="relative w-full h-96 sm:h-96 md:h-[32rem] lg:h-[40rem]">
              <Image
                src={src ?? "/placeholder.png"}
                alt="Preview"
                fill
                className="rounded object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-6">
              {title && <h2 className="text-2xl butovo font-bold mb-2">{title}</h2>}
              {descr && <p className="text-md font-light">{descr}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;