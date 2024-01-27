// import React from 'react'
//  import { BrowserRouter, Routes, Route }  from "react-router-dom"
// import Layout from "./Layout"
// import Home from "./Pages/Home"
// import About from "./Pages/About"
// import Contact from "./Pages/Contact"
// import "./Pages/Layout.css";
// export default function App() {
//  return (
//    <div>
//     <BrowserRouter>
//        <Routes>
//         <Route path="/" element={<Layout/>}>
//            <Route index element={<Home/>}/>
//           <Route path="about" element={<About/>}/>
//            <Route path="contact" element={<Contact/>}/>
//          </Route>
//        </Routes>
//        </BrowserRouter>
//      </div>
//    )
//  }
import React from 'react'
import Web from  "./Pages/Web"
import Effect from "./Pages/Effect"
import Reducer from "./Pages/Reducer"
import Callbacks from "./Callbacks"
import Ref from "./Pages/Ref"
import Counterref from "./Pages/Counterref"
import Memo from "./Pages/Memo"
export default function App() {
  return (
    <div>
      <Web/>
      <Effect/>
      <Reducer/>
      <Callbacks/>
      <Ref/>
      <Counterref/>
      <Memo/>
    </div>
  )
}
