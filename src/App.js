import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Blog from './componets/Blog';
import Pagitation from './componets/pagitation';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/category';
import Tag from './pages/tag';
import BlogPage from './pages/BlogPage';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


function App() {
  const{fetchandSetdata} = useContext(AppContext);
  // for: get current location path
  const location = useLocation();

  //for: get or modify query sting in url for current location
  const [searchparams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    // fetchandSetdata()
    const page = searchparams.get('page') ?? 1;
    if(location.pathname.includes('tags'))
    { 
      const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchandSetdata(Number(page),tag);
    }
    else if(location.pathname.includes('categories'))
    {
      const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchandSetdata(Number(page), null, category)
    }
    else{
      fetchandSetdata(page);
    }
  //location.pathname -> return curent path
  //useSearchParams -> return query search  (ex: ?page=1)
  },[location.pathname,location.search]);
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/categories/:category' element={<Category/>} />
        <Route path='/tags/:tagId' element={<Tag/>}/>
        <Route path='/blog/:blogId' element={<BlogPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
