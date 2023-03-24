import { Route, Routes } from 'react-router-dom';
import { ProductPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { TodoPage } from './pages/TodoPage';
import { Navigation } from './components/Navigation';

function App() {
  return(
    <>
     <Navigation/>
    <Routes>
      <Route path='/' element={ <ProductPage/> } />
      <Route path='/about' element={ <AboutPage/> } />
      <Route path='/todo' element={ <TodoPage/> }/>
    </Routes>
    
    </>
  )
}

export default App;
