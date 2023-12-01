import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useOrientation = () => {
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    const updateState = () => {
      const { width, height } = Dimensions.get("window");
      if (width < height) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    };

    Dimensions.addEventListener("change", updateState);

    return () => Dimensions.removeEventListener("change", updateState);
  }, []);

  return orientation;
};

export default useOrientation;
