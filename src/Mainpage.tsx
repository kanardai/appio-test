import { Hero } from './components/Hero';
import { SectionOne } from './components/SectionOne';
import { Topbar } from './components/Topbar/Topbar';

export const Mainpage = () => {
  return (
    <div>
      <Topbar />
      <Hero />
      <SectionOne />

    </div>
  );
};
