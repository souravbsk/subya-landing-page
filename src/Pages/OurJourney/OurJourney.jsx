import React from "react";
import OurJourneyContent from "./OurJourneyContent";
import { ScrollRestoration } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const OurJourney = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12">
        <div className=" mb-8">
          <SectionTitle title="Sabhyasha Journey"></SectionTitle>
          <div className="space-y-3 mb-5">
            <OurJourneyContent
              text="Since the incorporation of Sabhyasha Retail Tech Pvt Ltd on 7th March 2022, Sabhyasha Retail Tech has started identifying artisans across India and formed successful collaborations with over 200 artisans across four states—Odisha, Rajasthan, Uttarakhand, and Gujarat. This strategic partnership aimed to comprehensively understand the challenges faced by artisans, leading to the development of a tailor-made solution. Our joint efforts have resulted in the creation of a diverse product range, seamlessly introduced both online and offline, allowing for extensive customer validation and acceptance.
"
            ></OurJourneyContent>
            <OurJourneyContent text="Sabhyasha has achieved significant recognition, earning a spot as a Top 20 Startup in Start-up Odisha Fundstack for both 2022 and 2023. Supported by Microsoft's Founders Hub, the company has forged successful Memorandums of Understanding (MOUs) with the Uttarakhand Government and KIIT TBI SFURTI. Furthermore, Sabhyasha has emerged victorious in hackathons hosted by prestigious programs such as CII Ideas2Impact, Wadhwani Lift Off 8.1, STPI Chunnauti 5.0, CII ICONN, Surge 3.0 by AIC Nalanda, Rise Up 2.0 a Mahindra e-hub pre-acceleration program, and IFIA Startups Global Program. This multifaceted recognition underscores Sabhyasha's commitment to innovation and impactful contributions within the entrepreneurial ecosystem."></OurJourneyContent>
          </div>
          <div className="space-y-3">
            <SectionTitle
              className="!text-left !mb-0 !text-lg"
              title="Story behind Sabhyasha’s inception:"
            ></SectionTitle>
            <OurJourneyContent text="The idea for Sabhyasha Retail Tech originated from a personal experience during the visit to Odisha after the prolonged COVID-19 lockdown in 2020. While visiting our home in Odisha from Mumbai, we felt a significant gap in staying connected with our family, particularly our elderly parents. The limitations of communication during the lockdown prompted us to explore opportunities in Odisha for a more extended stay."></OurJourneyContent>
            <OurJourneyContent text="As a family, our first step was to strategically rent a house in Bhubaneswar, centrally located between both sets of parents and in-laws, with convenient access to the airport. We decided to adorn our home with authentic Odisha Art, leading us to engage with local artisans. Through these interactions, we discovered a wealth of traditional art forms in the region.">
              {" "}
            </OurJourneyContent>
            <OurJourneyContent text="However, we also noticed the challenges artisans faced in earning a decent livelihood from their craft. Delving deeper, we uncovered the alarming reality that several popular art forms of India, were on the endangered list of the Handicraft Department of the Government of India. Despite a global demand for handicraft products amounting to $698 billion in 2022, India contributed only 0.7% to this demand."></OurJourneyContent>
            <OurJourneyContent text="Recognizing an opportunity to address this issue through market linkage, we embarked on developing solutions. This journey led to the launch of www.sabhyasha.com on August 15, 2022. Subsequently, we focused on creating an exclusive mobile app, www.artisanswizard.com, using the ONDC framework. The app aimed to provide artisans with direct access to multiple marketplaces, connecting them with a broader consumer base and empowering them to thrive in the digital age.">
              {" "}
            </OurJourneyContent>
          </div>
          <ScrollRestoration />
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
