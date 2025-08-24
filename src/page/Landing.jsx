import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import About from "../components/About.jsx";
import Features from "../components/Features.jsx";
import ModernDesign from "../components/ModernDesign.jsx";
import FAQ from "../components/FAQ.jsx";
import ChatBot from "../components/ChatBot.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Footer from "../components/Footer.jsx";
import UI from "../components/UI.jsx";
import Companies from "../components/Companies.jsx";
import ContactUs from "../components/ContactUs.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { useLandingData } from "../api/landing.js";

const Landing = ({ landingId }) => {
  const { data, isLoading } = useLandingData(landingId);

  if (isLoading) return <div>Loading...</div>;

  const { sections_info: sections = [], header_id, footer_id } = data;

  return (
    <div className="w-screen flex flex-col justify-center items-center overflow-x-hidden">
      {header_id && <Header id={header_id} />}
      {sections.map((section, index) => {
        if (section.banner_section)
          return <Banner key={index} id={section.banner_section} scrollId="bannerSection" landingId={landingId} />;
        if (section.feature_section)
          return <Features key={index} id={section.feature_section} scrollId="featuresSection" />;
        if (section.workSteps_section)
          return <HowItWorks key={index} id={section.workSteps_section} />;
        if (section.about_section)
          return <About key={index} id={section.about_section} scrollId="aboutUsSection" />;
        if (section.advantage_section)
          return <ModernDesign key={index} id={section.advantage_section} />;
        if (section.questions_section)
          return <FAQ key={index} id={section.questions_section} />;
        if (section.user_interface_section)
          return <UI key={index} id={section.user_interface_section} />;
        if (section.companies_section)
          return <Companies key={index} id={section.companies_section} />;
        if (section.newsletter_section)
          return <Newsletter key={index} id={section.newsletter_section} landingId={landingId} />;
        if (section.form_section)
          return <ContactUs key={index} id={section.form_section} scrollId="contactUsSection" landingId={landingId} />;
        return null;
      })}
      <ChatBot />
      {footer_id && <Footer id={footer_id} />}
    </div>
  );
};

export default Landing;
