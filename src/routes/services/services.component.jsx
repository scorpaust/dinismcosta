/* eslint-disable array-callback-return */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStartAsync } from "../../store/categories/category.action";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Services = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStartAsync());
    }, [dispatch]);

    return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    );
}

export default Services;