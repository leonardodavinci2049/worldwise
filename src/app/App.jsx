import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "../contexts/CitiesContext";
import { AuthProvider } from "../contexts/FakeAuthContext";

// import components
import SpinnerFullPage from "../pages/common-components/spinnerFullPage/SpinnerFullPage";
import Citylist from "../pages/AppLayout/components/sidebar/components/cities/cityList/CityList";
import City from "../pages/AppLayout/components/sidebar/components/cities/city/City";
import CountryList from "../pages/AppLayout/components/sidebar/components/countries/countryList/CountryList";
import Form from "../pages/AppLayout/components/sidebar/components/form/Form";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const Product = lazy(() => import("../pages/Product/Product"));
const Pricing = lazy(() => import("../pages/Pricing/Pricing"));
const Login = lazy(() => import("../pages/Login/Login"));
const AppLayout = lazy(() => import("../pages/AppLayout/AppLayout"));
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));

// dist/assets/index-59fcab9b.css   30.56 kB │ gzip:   5.14 kB
// dist/assets/index-f7c12d89.js   572.44 kB │ gzip: 151.29 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<Citylist />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
