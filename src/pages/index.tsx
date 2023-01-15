// import { Base } from '../templates/Base';
import { Meta } from '../layout/Meta';
import { Banner } from '../templates/Banner';
import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { List } from '../templates/List';
import { Navbar } from '../templates/Navbar';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    {/* <Search /> */}
    <List />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export default Index;
