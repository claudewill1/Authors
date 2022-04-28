
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Edit from './views/Edit';
import New from './views/New';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<New />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
