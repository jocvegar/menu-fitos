import { useState } from "react";
import img from "../assets/images/chicken_blue_cheese.jpg";
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      position: "relative",
      borderRadius: 0,
    },
    media: {
      paddingTop: "80%",
      display: "block",
      width: "100%",
    },
    overlay: {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      backgroundColor: "#22222279",
      overflow: "hidden",
      width: "100%",
      transition: "0.5s ease",
    },
    text: {
      color: "white",
      fontSize: "20px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
    // expand: {
    //   transform: "rotate(0deg)",
    //   marginLeft: "auto",
    //   transition: theme.transitions.create("transform", {
    //     duration: theme.transitions.duration.shortest,
    //   }),
    // },
    // expandOpen: {
    //   transform: "rotate(180deg)",
    // },
  })
);

type Props = {
  title: string;
};
function ItemCard({ title }: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMdOrBigger = useMediaQuery(theme.breakpoints.up("md"));

  const [overlayHeight, setOverlayHeight] = useState("0%");

  const handleOverlayHeight = () => {
    const initialState = overlayHeight === "100%" ? "0%" : "100%";
    setOverlayHeight(initialState);
  };

  return (
    <Card
      className={classes.root}
      onClick={() => handleOverlayHeight()}
      onMouseEnter={() => isMdOrBigger && setOverlayHeight("100%")}
      onMouseLeave={() => isMdOrBigger && setOverlayHeight("0%")}>
      <CardMedia className={classes.media} image={img} title={title} />
      <div className={classes.overlay} style={{ height: overlayHeight }}>
        <div className={classes.text}>{title}</div>
      </div>
    </Card>
  );
}

export default ItemCard;
