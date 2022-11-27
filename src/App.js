import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepages from "./Pages/Homepages";
import Pengajuanumkm from "./Pages/Pengajuanumkm";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Homepages />} />
               <Route path="/pengajuan-umkm" element={<Pengajuanumkm />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
