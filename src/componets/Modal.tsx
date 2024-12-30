import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Item } from "../types";

type ModalProps = {
  onClose: () => void;
  itemData: Item | null;
};

const Modal: React.FC<ModalProps> = ({ itemData, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Add the no-scroll class to the body when the modal is opened
    document.body.classList.add("no-scroll");

    // Remove the no-scroll class from the body when the modal is closed
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!itemData) return null;
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 bg-overlay flex justify-center items-center z-[999]"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex bg-white rounded-sm shadow-lg w-[60%] h-[90vh] z-[1000]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <img
          src="dummy.jpg"
          alt="Product"
          className="w-1/2 h-full object-cover"
          draggable={false}
        />

        <div className="relative w-1/2 h-full">
          <button
            className="right-3 absolute top-4 p-1 rounded-full border-transparent border-2 hover:border-btn-red"
            onClick={() => onClose()}
          >
            <IoMdClose size={26} />
          </button>
          <div className="space-y-4 pt-12 px-6">
            <h2 className="text-2xl">{itemData.label}</h2>
            <p className="text-base">{itemData.description}</p>
          </div>
          <div className="absolute bottom-0 px-6 py-4 bg-slate-200 w-full flex justify-center items-center gap-4">
            <div className="flex items-center space-x-4 bg-white border-black border">
              <button onClick={decrementQuantity} className="p-[10px] ">
                <BiMinus />
              </button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity} className=" p-[10px]">
                <BiPlus />
              </button>
            </div>
            <button
              onClick={() => alert("Added to Cart")}
              className="bg-btn-red text-white w-full px-4 py-2 hover:bg-red-600 transition-colors duration-300"
            >
              Add (${(itemData.price * quantity).toFixed(2)})
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
