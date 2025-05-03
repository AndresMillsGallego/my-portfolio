import style from "./Keyboard.module.scss";
import { motion } from "motion/react";

interface KeyProps {
  content: string;
  variant?: "light" | "highlight";
  keyContainerClass?: string;
  onClick?: () => void;
  title?: string;
}

const Key = (props: KeyProps) => {
  const { content, variant, keyContainerClass, onClick, title } = props;
  const keyVariantClass = variant ? variant : "default";
  const containerClass = keyContainerClass ? keyContainerClass : "";

  const handleClick = onClick ? onClick : () => {};

  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.95 }}
      className={`${style["key"]} ${style[keyVariantClass]} ${style[containerClass]}`}
      onClick={() => handleClick()}
      title={title}
    >
      <span className={style["key-content"]}>{content}</span>
    </motion.div>
  );
};

export default Key;
