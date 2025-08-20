import { useEffect, useState } from "react";
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

const BASE_URL = "http://127.0.0.1:8000";

const Landing = () => {
        const [sections, setSections] = useState([]);
        const [headerId, setHeaderId] = useState(null);
        const [footerId, setFooterId] = useState(null);

        useEffect(() => {
                const fetchSections = async () => {
                        const res = await fetch(`${BASE_URL}/api/landing-pages/2/`);
                        const data = await res.json();
                        setSections(data.sections_info);
                        setHeaderId(data.header_id);
                        setFooterId(data.footer_id);
                };

                fetchSections();
        }, []);

        if (!sections.length) return <div>Loading...</div>;

        return (
            <div className="w-screen flex flex-col justify-center items-center overflow-x-hidden">
                    {headerId && <Header id={headerId} />}
                    {sections.map((section, index) => {
                            if (section.banner_section)
                                    return <Banner key={index} id={section.banner_section} />;
                            if (section.feature_section)
                                    return <Features key={index} id={section.feature_section} />;
                            if (section.workSteps_section)
                                    return <HowItWorks key={index} id={section.workSteps_section} />;
                            if (section.about_section)
                                    return <About key={index} id={section.about_section} />;
                            if (section.advantage_section)
                                    return <ModernDesign key={index} id={section.advantage_section} />;
                            if (section.questions_section)
                                    return <FAQ key={index} id={section.questions_section} />;
                            if (section.user_interface_section)
                                    return <UI key={index} id={section.user_interface_section} />;
                            if (section.companies_section)
                                    return <Companies key={index} id={section.companies_section} />;
                            if (section.newsletter_section)
                                    return <Newsletter key={index} id={section.newsletter_section} />;
                            if (section.form_section)
                                    return <ContactUs key={index} id={section.form_section} />;
                            return null;
                    })}
                    <ChatBot />
                    {footerId && <Footer id={footerId} />}
            </div>
        );
};

export default Landing;
