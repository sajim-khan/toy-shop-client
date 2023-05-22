import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ToyStore  `;
  }, [title]);
};

export default useTitle;
