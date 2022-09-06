import SiteCard from 'components/SiteCard';
import { useMemo } from 'react';
import wixWishes from 'images/wixwishes.png';
import personalSite from 'images/pesonalsite.png';

const MyWork = () => {
  const sitesDetails = useMemo(() => {
    return [
      {
        image: personalSite,
        imageAlt: 'My site resume/cv',
        title: 'Personal Site',
        siteLink: 'https://mohamadhusari.github.io',
      },
      {
        image: wixWishes,
        imageAlt: 'Wix wishes site and events',
        title: 'WixWishes',
        siteLink: 'https://github.com/MohamadHusari/Wishes',
      },
    ];
  }, []);

  return (
    <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-0 justify-items-center">
      {sitesDetails.map((site, index) => (
        <SiteCard key={index} index={index + 1} {...site} />
      ))}
    </div>
  );
};

export default MyWork;
