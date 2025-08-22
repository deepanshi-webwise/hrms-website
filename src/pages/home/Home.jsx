import { AboutHomePage, Faq, FeatureSection, FrenzoVerifySection, HeaderSection, PartnerSection, TestimonialSection } from "../../component";

const Home = () => {
  return (
    <div className="">
      <section>
        <HeaderSection />
      </section>
      <section className="py-16">
        <div
          className="relative before:content-[''] before:absolute before:top-0 before:left-0 
               before:w-34 before:h-full before:bg-[url('src/asset/images/hompage-section2.png')] 
               before:bg-cover  before:rounded-2xl "
        >
          <AboutHomePage />
        </div>
      </section>
      <section className="py-16">
       <PartnerSection/>
      </section>
      <section className="py-12">
        <FeatureSection/>

      </section>
      <section className="py-12">
        <FrenzoVerifySection/>
      </section>
      <section className="pt-12 pb-24">
      <TestimonialSection/>
      </section>
      <section className="">
           <Faq/>
      </section>
    </div>
  );
};

export default Home;
