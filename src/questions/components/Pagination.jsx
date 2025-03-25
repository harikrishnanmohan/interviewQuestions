import { useEffect, useState } from "react";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <p>{title}</p>
    </div>
  );
};

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=500");
    const json = await res.json();
    setProducts(await json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const PAGE_PRODUCT_COUNT = 10;
  const totalProducts = products.length;
  const numberOfPages = Math.ceil(totalProducts / PAGE_PRODUCT_COUNT);
  const start = currentPage * PAGE_PRODUCT_COUNT;
  const end = start + PAGE_PRODUCT_COUNT;

  const onClickPrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const onClickNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="pagination">
      <h1>Pagination</h1>
      <div className="pagination-buttons">
        <button
          className="pagination-button"
          disabled={currentPage === 0}
          onClick={onClickPrevious}
        >
          ◀️
        </button>
        {[...Array(numberOfPages).keys()].map((item) => (
          <button
            key={item}
            className={`pagination-button ${
              currentPage === item && "active-page"
            }`}
            onClick={() => setCurrentPage(item)}
          >
            {item + 1}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={onClickNext}
          disabled={currentPage === numberOfPages - 1}
        >
          ▶️
        </button>
      </div>

      {products.length > 0 ? (
        <div className="products-container">
          {products.slice(start, end).map((product) => (
            <ProductCard
              image={product.thumbnail}
              title={product.title}
              key={product.id}
            />
          ))}
        </div>
      ) : (
        <p>No products found...</p>
      )}
    </div>
  );
};
export default Pagination;
