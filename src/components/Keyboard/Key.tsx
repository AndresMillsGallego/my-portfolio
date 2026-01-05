import { ComponentProps } from "react";
import style from "./Keyboard.module.scss";
import { motion } from "motion/react";

interface KeyProps extends ComponentProps<"div"> {
  content: string;
  variant?: "light" | "highlight";
  keyContainerClass?: string;
  isActionKey?: boolean;
}

const Key = (props: KeyProps) => {
  const {
    content,
    variant,
    keyContainerClass,
    onClick,
    title,
    onMouseDown,
    onMouseUp,
    isActionKey = false,
  } = props;
  const keyVariantClass = variant ? variant : "default";
  const containerClass = keyContainerClass ? keyContainerClass : "";

  const handleClick = onClick ? onClick : () => {};

  return (
    <motion.div
      role="button"
      style={{ transformStyle: "preserve-3d" }}
      whileHover={
        isActionKey ? { scale: 1.025, outline: "2px solid #00ff00" } : {}
      }
      whileTap={{ scale: 0.95 }}
      className={`${style["key"]} ${style[keyVariantClass]} ${style[containerClass]}`}
      onClick={handleClick}
      title={title}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <span className={style["key-content"]}>{content}</span>
    </motion.div>
  );
};

export default Key;
