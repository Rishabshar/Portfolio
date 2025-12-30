import { Routes, Route } from "react-router-dom";
import UI from "./components/UI/UI";
import ViewProject from "./components/ViewProject/ViewProject";
import ContactMe from "./components/ContactMe/ContactMe";

function Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UI />} />
        <Route path="/ui" element={<UI />} />
         <Route path="/viewproject" element={<ViewProject />} />
         <Route path="/contactme" element={<ContactMe />} />

        
        
      </Routes>
    </>
  );
}

export default Layout;