import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Create from "./components/blogs/Create/Create";
import BlogDetails from "./components/blogs/BlogDetails/BlogDetails";
import NotFound from "./components/NotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="Content">
          <Routes className="Content">
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/blogs/:id' element={<BlogDetails/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
