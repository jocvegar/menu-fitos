import { useState, useEffect, useMemo } from "react";
import ItemCard from "./ItemCard";
import ItemSuaceCard from "./ItemSuaceCard";
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
            category: doc.data().category,
            position: doc.data().position,
          })
        );
      });
      setMenu(items);
      setLoading(false);
    });
  }, []);

  const sandwichMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "sandwiches")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [menu]);

  const burgerMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "burgers")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [menu]);

  const tendersMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "tenders")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [menu]);

  const saladMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "salads")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [menu]);

  const entreesMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "entrees")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [menu]);

  const boxMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "boxes")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [menu]);

  const pizzaMenu = useMemo(() => {
    return menu
      .filter((item: IMenuItem) => item.category === "pizzas")
      .sort((a: IMenuItem, b: IMenuItem) => (a.position < b.position ? -1 : 1));
  }, [menu]);

  return (
    <div>
      <Box mb={10}>
        {loading && (
          <Box mt={10}>
            <Typography variant="h4" gutterBottom align="center">
              Cargando...
            </Typography>
          </Box>
        )}

        {!loading && (
          <>
            <div id="sandwiches">
              <div className="titleWrapper">
                <Typography
                  variant="h4"
                  gutterBottom
                  color="primary"
                  className="mt-10 mr-2">
                  <strong>Sandwiches</strong>
                </Typography>
                <Typography variant="h6" gutterBottom color="secondary">
                  Incluye Papas (+ Lps. 45 con Dirty Fries)
                </Typography>
              </div>
              <Grid container spacing={isSmall ? 1 : 4}>
                {sandwichMenu &&
                  sandwichMenu.map((menuItem: IMenuItem) => {
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
            </div>

            <div id="burgers">
              <div className="titleWrapper">
                <Typography
                  variant="h4"
                  gutterBottom
                  color="primary"
                  className="mt-10 mr-2">
                  <strong>Burgers</strong>
                </Typography>
                <Typography variant="h6" gutterBottom color="secondary">
                  Incluye Papas (+ Lps. 45 con Dirty Fries)
                </Typography>
              </div>
              <Grid container spacing={isSmall ? 1 : 4}>
                {burgerMenu &&
                  burgerMenu.map((menuItem: IMenuItem) => {
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
            </div>

            <div id="tenders">
              <Typography
                variant="h4"
                gutterBottom
                color="primary"
                className="mt-10">
                <strong>Chicken Tendres</strong>
              </Typography>

              <div className="titleWrapper">
                <Typography
                  variant="h4"
                  gutterBottom
                  color="primary"
                  className="mt-10 mr-2">
                  <strong>Chicken Tendres</strong>
                </Typography>
                <Typography variant="h6" gutterBottom color="secondary">
                  + Lps. 30 orden Papas || + Lps. 45 con Dirty Fries
                </Typography>
              </div>

              <Grid container spacing={isSmall ? 1 : 4}>
                {tendersMenu &&
                  tendersMenu.map((menuItem: IMenuItem) => {
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
            </div>

            <div id="suaces">
              <Typography
                variant="h4"
                gutterBottom
                color="primary"
                className="mt-10">
                <strong>Salsas</strong>
              </Typography>
              <Grid container spacing={isSmall ? 1 : 4}>
                {[
                  "Berry BBQ",
                  "El Amado",
                  "Buffalo Habanero",
                  "Strawberry Honey",
                ].map((item, idx) => {
                  return (
                    <Grid item xs={12} md={4} key={idx}>
                      <ItemSuaceCard title={item} />
                    </Grid>
                  );
                })}
              </Grid>
            </div>

            <div id="salads">
              <Typography
                variant="h4"
                gutterBottom
                color="primary"
                className="mt-10">
                <strong>Ensaladas</strong>
              </Typography>
              <Grid container spacing={isSmall ? 1 : 4}>
                {saladMenu &&
                  saladMenu.map((menuItem: IMenuItem) => {
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
            </div>

            <div id="entrees">
              <Typography
                variant="h4"
                gutterBottom
                color="primary"
                className="mt-10">
                <strong>Para Picar</strong>
              </Typography>
              <Grid container spacing={isSmall ? 1 : 4}>
                {entreesMenu &&
                  entreesMenu.map((menuItem: IMenuItem) => {
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
            </div>

            <div id="boxes">
              <Typography
                variant="h4"
                gutterBottom
                color="primary"
                className="mt-10">
                <strong>Boxes</strong>
              </Typography>
              <Grid container spacing={isSmall ? 1 : 4}>
                {boxMenu &&
                  boxMenu.map((menuItem: IMenuItem) => {
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
            </div>

            <div id="pizzas">
              <Typography
                variant="h4"
                gutterBottom
                color="primary"
                className="mt-10">
                <strong>Pizzas</strong>
              </Typography>
              <Grid container spacing={isSmall ? 1 : 4}>
                {pizzaMenu &&
                  pizzaMenu.map((menuItem: IMenuItem) => {
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
            </div>
          </>
        )}
      </Box>
    </div>
  );
};

export default ItemList;
