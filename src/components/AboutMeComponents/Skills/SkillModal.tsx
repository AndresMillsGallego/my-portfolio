import {
  Modal,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  Link,
  Fade,
} from "@mui/material";
import { RiCloseLargeFill } from "react-icons/ri";
import { IconType } from "react-icons/lib";
import style from "./Skills.module.scss";

interface SkillModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  Icon: IconType;
  iconColor: string;
  linkURL: string;
  contentHeading: string;
  content: string[];
}

const SkillModal = (props: SkillModalProps) => {
  const {
    isOpen,
    setIsOpen,
    title,
    Icon,
    iconColor,
    linkURL,
    contentHeading,
    content,
  } = props;

  const handleClose = () => {
    setIsOpen(false);
  };

  const CardHeaderTitle = () => {
    return (
      <div className={style["skill-modal-card-header-title-container"]}>
        <h2 className={style["skill-modal-card-header-title"]}>{title}</h2>
        <RiCloseLargeFill
          className={style["modal-close-button"]}
          size={20}
          onClick={handleClose}
        />
      </div>
    );
  };

  return (
    <Modal open={isOpen} onClose={handleClose} className={style["skill-modal"]}>
      <Fade in={isOpen}>
        <Card className={style["skill-modal-card"]}>
          <CardHeader
            className={style["skill-modal-card-heading"]}
            title={<CardHeaderTitle />}
            avatar={
              <Avatar variant="rounded" sx={{ backgroundColor: "inherit" }}>
                <Icon color={iconColor} size={70} />
              </Avatar>
            }
          />
          <CardContent className={style["skill-modal-card-content"]}>
            <h4 className={style["skill-modal-card-content-heading"]}>
              {contentHeading}
            </h4>
            <ul className={style["content-list"]}>
              {content.map((item, index) => {
                const splitItem = item.split(":");
                const itemTitle = `${splitItem[0]}:`;
                const itemContent = splitItem[1];
                return (
                  <li
                    key={`${itemTitle}: ${index}`}
                    className={style["content-list-item"]}
                  >
                    <strong>{itemTitle}</strong>
                    <span>{itemContent}</span>
                  </li>
                );
              })}
            </ul>
          </CardContent>
          <CardActions className={style["skill-modal-card-actions"]}>
            <Link href={linkURL} underline="hover" sx={{ marginLeft: "auto" }}>
              Learn more about {title}
            </Link>
          </CardActions>
        </Card>
      </Fade>
    </Modal>
  );
};

export default SkillModal;
