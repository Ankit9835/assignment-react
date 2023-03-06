import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {Home,Contact,About,Service,Error,SharedLayout} from './pages'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <SharedLayout />
          }
        >
          <Route index element={<Home />} />
          <Route path='about-us' element={<About />} />
          <Route path='contact-us' element={<Contact />} />
          <Route path='services' element={<Service />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
