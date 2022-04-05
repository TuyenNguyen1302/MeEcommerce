import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage/HomePage';
import ListProductPage from './page/ListProductPage/ListProductPage';
import ProductInfoPage from './page/ProductInfoPage/ProductInfoPage';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/product' element={<ListProductPage/>}></Route>
      <Route path='/product/:id' element={<ProductInfoPage/>}></Route>
    </Routes>
  );
}

export default App;
