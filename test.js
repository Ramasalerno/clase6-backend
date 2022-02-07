const Contenedor = require("./index");

const items = async () => {

  const products = new Contenedor("./productos.txt");

  const getId = await products.save(
    {
      titulo: "Notebook",
      price: 1250,
      thumbnail: "https://img2.freepng.es/20180601/uk/kisspng-laptop-dell-vostro-dell-inspiron-14-3000-series-water-skateboard-5b10e449aed398.5822159015278336737161.jpg"    
    });

  await products.save(
    {
      title: "Monitor",
      price: 450.25,
      thumbnail: "https://m.media-amazon.com/images/I/517PlSmEN2L._AC_SX569_.jpg"
    })
  await products.save(
    {
      title: "Pc escritorio",
      price: 850,
      thumbnail: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/desktops/optiplex_desktops/3090_micro/pdp/desktop-optiplex-3090-micro-resp-pdp-hero-504x350.jpg?fmt=jpg&wid=570&hei=400"
    })
  const objs = await products.getAll();
  return objs
};
items();