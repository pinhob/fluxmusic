import { useLottie } from "lottie-react";
import musicLoader from "../assets/animations/music_loader.json";

const Loader = () => {
  const options = {
    animationData: musicLoader,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Loader;
