import React from "react";
import Registration from "./components/registration/Registration";
import Loing from "./components/login/Login";
import DoctorLogin from "./components/login/DoctorLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Appointment from "./components/pages/Appointment";
import Doctors from "./components/pages/Doctors";
import Shop from "./components/pages/Shop";
import ContactUs from "./components/pages/ContactUs";
import Blog from "./components/pages/Blog";
import Pblood from "./components/pages/Pblood";
import PaddtoCard from "./components/pages/PaddtoCard";
import PdoctorDetails from "./components/pages/PdoctorDetails";
import Pagination from "./components/pagination/Pagination";
import ProductCard from "./components/productCard/ProductCard";
import Ambulance from "./components/pages/Ambulance";
import Doner from "./components/pages/Doner";
import PDoner from "./components/pages/PDoner";
import PPurchaseProduct from "./components/pages/PPurchaseProduct";
import Ptablet from "./components/pages/Ptablet";
import Psirap from "./components/pages/Psirap";
import Pcrime from "./components/pages/Pcrime";
import Pinjections from "./components/pages/Pinjections";
import Pdrope from "./components/pages/Pdrope";
import PmedicalComponent from "./components/pages/PmedicalComponent";
import PSafetyEquipment from "./components/pages/PSafetyEquipment";
import PbabyCare from "./components/pages/PbabyCare";
import Navber from "./components/navber/Navber";
// import Admin from './components/Upload/Admin'
import PdonetBlood from "./components/pages/PdonetBlood";
import Admin from "./components/admin/Admin";
import Profile from "./components/profile";
import PvideoCall from "./components/pages/PvideoCall";
import PrivateRoutes from "./components/route/PrivateRoutes";
import Category from "./components/pages/Shop/Category";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Message from "./components/profile/message";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Loing />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/category/:slug" element={<Category />}></Route>
          <Route
            path="/category/:slug/:productSlug"
            element={<PaddtoCard />}
          ></Route>
          <Route path="/about" element={<ContactUs />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blood" element={<Pblood />}></Route>
          <Route path="/addcard" element={<PaddtoCard />}></Route>
          <Route path="/doctorDetails/:id" element={<PdoctorDetails />}></Route>
          <Route path="/page" element={<Pagination />}></Route>
          <Route path="/product" element={<ProductCard />}></Route>
          <Route path="/ambulance" element={<Ambulance />}></Route>
          <Route path="/doner" element={<Doner />}></Route>
          <Route path="/pdoner" element={<PDoner />}></Route>

          <Route path="/purchaseProduct" element={<PPurchaseProduct />}></Route>
          <Route path="/tablet" element={<Ptablet />}></Route>
          <Route path="/sirap" element={<Psirap />}></Route>
          <Route path="/crime" element={<Pcrime />}></Route>
          <Route path="/injections" element={<Pinjections />}></Route>
          <Route path="/drope" element={<Pdrope />}></Route>
          <Route path="/component" element={<PmedicalComponent />}></Route>
          <Route path="/equipment" element={<PSafetyEquipment />}></Route>
          <Route path="/babyCare" element={<PbabyCare />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/videoCall" element={<PvideoCall />}></Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/appointment" element={<Appointment />}></Route>
            <Route path="/donetBlood" element={<PdonetBlood />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/profile/message/:doctorId" element={<Message />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
