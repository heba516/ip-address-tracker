import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../components/Home.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/ip-address-tracker/" element={<Home />} />
      <Route path="*" element={<p>Not found</p>} />
    </Route>
  )
);

export default router;
