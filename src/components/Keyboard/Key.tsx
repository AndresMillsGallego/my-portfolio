import style from "./Keyboard.module.scss";

interface KeyProps {
  content: string;
  variant?: "light" | "highlight";
  keyContainerClass?: string;
}

const Key = (props: KeyProps) => {
  const { content, variant, keyContainerClass } = props;
  const keyVariantClass = variant ? variant : "default";
  const containerClass = keyContainerClass ? keyContainerClass : "";

  return (
    <div
      className={`${style["key"]} ${style[keyVariantClass]} ${style[containerClass]}`}
    >
      <span className={style["key-content"]}>{content}</span>
    </div>
  );
};

export default Key;
