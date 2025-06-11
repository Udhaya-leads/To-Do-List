import Home from './Components/React Router/Home'
import About from './Components/React Router/About'
import Contact from './Components/React Router/Contact'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import User from './Components/React Router/User';
import Newbook from './Components/React Router/Newbook';
import OldBook from './Components/React Router/OldBook';
import Login from './Components/React Router/Login';
import Dashboard from './Components/React Router/Dashboard';

  
function Links() {
    

  return (

    <div>
      <BrowserRouter>
      <ul>
    <li><Link to ='/' >Home</Link></li>
    <li><Link to = '/about'>About</Link></li>
    <li><Link to = '/contact-us'>Content</Link></li>
    <li><Link to = '/user/1'>User 1</Link></li>
    <li><Link to = '/user/2 '>User 2</Link></li>
    <li><Link to = '/book/old_book'>Old book</Link></li>
    <li><Link to = '/book/new_book'>New book</Link></li>
    <li><Link to = '/login'>Login</Link></li>


     </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/User/:id' element={<User/>}/>

          <Route path='/book'>
            <Route path='old_book' element={<OldBook/>}/>
            <Route path='new_book' element={<Newbook/>}/>  
          </Route>

          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>

    </div>

  );

}

export default Links;
        
