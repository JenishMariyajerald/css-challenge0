import './style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductItem from '../../components/product';
import productListData from '../../utils/productList.json'

const ProductList = () =>{
  return (
    <div className='main-list'>
   <Header />
   <div className='product-list-container'>
    {
      productListData.products.map((item)=>{
        return (
          <ProductItem item={item}/>
        );
      })
    }
   </div>
   <Footer />
    </div>
  );
}

export default ProductList;
