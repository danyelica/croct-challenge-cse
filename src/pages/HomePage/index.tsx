import { useContent } from "@croct/plug-react";
import { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import developerBackground from "../../assets/developer-background.png";
import marketerBackground from "../../assets/marketer-background.png";
import nullBackground from "../../assets/null-background.png";
import growthHakerBackground from "../../assets/growth-hacker-background.png";
import "./styles.css";

type HomeBannerContent = {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    link: string;
  };
};

function HomeBanner() {
  const { title, subtitle, cta } = useContent<HomeBannerContent>("home-banner");
  const userPersona = localStorage.getItem("persona");
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundArray = [
      developerBackground,
      marketerBackground,
      nullBackground,
      growthHakerBackground,
    ];
    if (!userPersona) {
      return setBackground(nullBackground);
    }
    const findingBackground = backgroundArray.find((picture) =>
      picture.includes(userPersona)
    );

    setBackground(findingBackground);
  }, []);

  return (
    <div className='home-page'>
      <img src={background} />
      <div className='home-left'>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <Link to={cta.link}>
          <button>{cta.label}</button>
        </Link>
      </div>
      <div className='home-right'></div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback='Personalizing content...'>
      <HomeBanner />
    </Suspense>
  );
}
