import { Routes,Route } from "react-router-dom"; 
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:productID" element={<ProductDetails />} />
        </Routes>
    )
};

export default App;