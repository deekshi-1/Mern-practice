import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/home"
import DetailPage from "./pages/detail";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<DetailPage/>}/>
        </>
    )
)