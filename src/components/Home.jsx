import { ProductProvider } from "../Context/Product";
import CartList from "./CartList";
import Header from "./Header";
import ProductArea from "./ProductArea";
import Section from "./Section";

function Home() {
  return (
    <div className="container mx-auto px-3">
      <Section>
        <ProductProvider>
          <Header />
          <div className="mt-4 max-h-[500px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-hidden">
            <ProductArea />
            <CartList />
          </div>
        </ProductProvider>
      </Section>
    </div>
  );
}

export default Home;
