import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      <h2>This is the category section has : {categoryNews.length}</h2>
      {categoryNews.map((news) => (
        <NewsCard news={news} key={news._id} />
      ))}
    </div>
  );
};

export default Category;
