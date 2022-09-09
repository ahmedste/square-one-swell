import ProductCard from '~/components/ProductCard';

import data from '~/data/products.json';
import Container from '~/layouts/Container';

interface Props {
  threeColumns?: boolean;
}

const ProductList = ({ threeColumns }: Props) => {
  return (
    <Container className="mb-10">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
          threeColumns ? 'lg:grid-cols-3 max-w-4xl mx-auto' : 'lg:grid-cols-4'
        }  gap-y-4 justify-items-center`}
      >
        {data.products.map((product, i) => {
          return <ProductCard product={product} key={i} />;
        })}
      </div>
    </Container>
  );
};

export default ProductList;
