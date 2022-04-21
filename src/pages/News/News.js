import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const News = () => {
  const params = useParams();

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
};

export default News;