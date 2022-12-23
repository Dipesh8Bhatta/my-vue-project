import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import BasicLesson from "./components/BasicLesson";

export default [
  { path: '/', component: BasicLesson },
  { path: '/product_list', component: ProductListPage },
  { path: '/product/:id', component: ProductDetailPage },
  { path: '/cart', component: ShoppingCartPage },
];
