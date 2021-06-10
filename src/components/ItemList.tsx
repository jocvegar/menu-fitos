import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { menuCollection } from "../firebase";
import { IMenuItem } from "../Interfaces";
// styles
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ItemList = () => {
  const responsiveTheme = useTheme();
  const isSmall = useMediaQuery(responsiveTheme.breakpoints.down("sm"));
  const [menu, setMenu] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    menuCollection.get().then((documents) => {
      let items: IMenuItem[] = [];
      documents.forEach((doc) => {
        items.push(
          Object.assign({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            price: doc.data().price,
            imgSrc: doc.data().imgSrc,
          })
        );
      });
      setMenu(items);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Box mb={10}>
        {loading && (
          <Box mt={4}>
            <Typography variant="h4" gutterBottom align="center">
              Cargando...
            </Typography>
          </Box>
        )}

        <Grid container spacing={isSmall ? 1 : 4}>
          {menu &&
            menu.map((menuItem: IMenuItem) => {
              return (
                <Grid item xs={12} md={4} key={menuItem.id}>
                  <ItemCard
                    title={menuItem.title}
                    description={menuItem.description}
                    price={menuItem.price}
                    imgSrc={menuItem.imgSrc}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default ItemList;
