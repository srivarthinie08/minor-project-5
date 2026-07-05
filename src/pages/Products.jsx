import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));

  }, []);

  return (

    <div>

      <Navbar />

      <h1>Products Page</h1>

      <input
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {

        products

          .filter((product) =>

            product.title
              .toLowerCase()
              .includes(search.toLowerCase())

          )

          .map((product) => (

            <ProductCard

              key={product.id}

              product={product}

            />

          ))

      }

    </div>

  );

}

export default Products;