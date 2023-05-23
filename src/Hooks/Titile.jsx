import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} || ToyShop `;
  }, [title]);
};

export default useTitle;
