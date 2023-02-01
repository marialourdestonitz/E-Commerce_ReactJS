import { useContext, useState, useEffect, Fragment } from "react"

import { useParams } from "react-router-dom"

import {CategoriesContext} from "../../context/Categories"

import ProductCard from "../../component/product-card/ProductCard"

import {CategoryContainer, Title} from "./Category.style"

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category