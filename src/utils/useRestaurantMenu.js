import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!resId) return; 
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(MENU_API + resId, {
        headers: {
          "x-cors-api-key": "temp_f87322221c175e9fc2dc965203acc930"
        }
      });

      if (!response.ok) throw new Error("Failed to fetch menu");

      const text = await response.text();

      if (!text) throw new Error("Empty menu response");

      const json = JSON.parse(text); 
      setResInfo(json?.data || null);

    } catch (err) {
    //   console.error("Menu fetch error:", err);
      setResInfo(null);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { resInfo, loading, error };
};

export default useRestaurantMenu;