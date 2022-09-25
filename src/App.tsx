import './App.css';
import {Suspense, useEffect} from 'react';
import {useContent, useCroct} from '@croct/plug-react';

type HomeBannerContent = {
  title: string,
  subtitle: string,
  cta: {
      label: string,
      link: string,
  },
};

function HomeBanner() {
    const {title, subtitle, cta} = useContent<HomeBannerContent>('home-banner');

    return (
        <div>
            <strong>{title}</strong>
            <p>{subtitle}</p>
            <a href={cta.link}>{cta.label}</a>
        </div>
    )
}

export default function HomePage() {
  const croct = useCroct();

  useEffect(()=>{
    croct.user.edit()
          .set('custom.persona', 'growth-hacker')
          .save(),
      [croct]
  }, [])
  
    return (
        <Suspense fallback="Personalizing content...">
            <HomeBanner/>
        </Suspense>
    )
}