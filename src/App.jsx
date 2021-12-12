import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductComponent from "./components/ProductComponent"
import ProductDetail from "./components/ProductDetail"
import ProductListing from "./components/ProductListing"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          {/* <Route path="/" exact component={ProductListing} /> */}
          <Route> 404 Not Found! </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
