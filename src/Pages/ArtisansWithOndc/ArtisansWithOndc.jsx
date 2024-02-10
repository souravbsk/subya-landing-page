import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import OndcContent from "./OndcContent";
import KeyFeature from "./KeyFeature";

const ArtisansWithOndc = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12">
        <div className=" mb-8">
          <SectionTitle title="Unlocking E-commerce for Indian Artisans with ONDC"></SectionTitle>
          <p>
            In the heartland of India, where the vibrant tapestry of traditional
            crafts weaves stories of cultural richness, Sabhyasha Retail Tech
            emerges as a catalyst for change. Focused on unlocking the vast
            potential of e-commerce for Indian artisans, the company introduces
            the Artisans' Wizard app, a transformative platform powered by
            cutting-edge features and supported by the Open Network for Digital
            Commerce (ONDC). This innovative approach not only bridges the gap
            between artisans and the modern e-commerce market but also ushers in
            a new era of empowerment.
          </p>
        </div>
        <OndcContent title="Artisans' Wizard App: A Digital Gateway for Traditional Crafts">
          Sabhyasha's Artisans' Wizard app is not just a mobile application; it
          is a beacon of hope for the countless artisans seeking to navigate the
          digital landscape. The app's user-friendly interface is designed to
          simplify the onboarding process for artisans, ensuring that they can
          seamlessly connect with consumers and showcase their exceptional
          craftsmanship.
        </OndcContent>
        <div className="my-4">
          <SectionTitle
            className="!mb-3 !text-left !text-base"
            title="Key Features:"
          ></SectionTitle>
          <ul className="space-y-2">
            <KeyFeature title="1. AI Content Creation:">
              The app incorporates Artificial Intelligence (AI) for content
              creation, allowing artisans to effortlessly generate compelling
              descriptions for their products. AI-driven algorithms analyze
              product details and craft engaging narratives, eliminating
              language barriers and enhancing the overall presentation of
              artisanal creations.
            </KeyFeature>
            <KeyFeature title="2. AI Image Enhancer:">
              Visual appeal is paramount in the world of e-commerce. Artisans'
              Wizard integrates an AI Image Enhancer, ensuring that product
              images are optimized for online platforms. This feature enhances
              the aesthetics of product photos, making them more appealing to
              potential customers and providing artisans with a competitive edge
              in the digital marketplace.
            </KeyFeature>
            <KeyFeature title="3. Business Intelligence:">
              To empower artisans with data-driven insights, the app
              incorporates Business Intelligence tools. This feature enables
              artisans to analyze market trends, understand customer
              preferences, and tailor their offerings accordingly. By leveraging
              data analytics, artisans can make informed decisions, enhance
              their product strategies, and adapt to evolving market dynamics.
            </KeyFeature>
            <KeyFeature title="4. Regional Language and Voice Command:">
              Recognizing the linguistic diversity of India, the app supports
              regional languages, breaking down communication barriers.
              Additionally, the integration of voice command features
              facilitates a smoother onboarding process. Artisans can navigate
              the app and perform tasks using voice commands, making it
              accessible to those with varying levels of digital literacy.
            </KeyFeature>
          </ul>
        </div>
        <OndcContent title="The ONDC Advantage:">
          Sabhyasha's strategic integration with the Open Network for Digital
          Commerce (ONDC) further amplifies the impact of the Artisans' Wizard
          app. ONDC, a framework developed by the Government of India, serves as
          a backbone for Sabhyasha's initiative, offering a standardized and
          interoperable digital commerce infrastructure
        </OndcContent>

        <div className="space-y-2">
          <ul className="space-y-2">
            <KeyFeature title="1. Wider Market Reach:">
              ONDC provides artisans with access to a network of multiple online
              stores, expanding their visibility beyond regional boundaries.
              This wider market reach enables artisans to connect with a diverse
              customer base, transcending geographical constraints and unlocking
              new avenues for growth.
            </KeyFeature>
            <KeyFeature title="2. Seamless Integration:">
              The integration with ONDC streamlines the e-commerce process for
              artisans. The standardized framework ensures compatibility with
              various online platforms, simplifying the listing and selling of
              products. This seamless integration reduces the technical
              complexities that artisans may face, allowing them to focus on
              their craft.
            </KeyFeature>
            <KeyFeature title="3. Economic Empowerment:">
              By participating in the digital marketplace facilitated by ONDC,
              artisans gain the potential for increased sales and revenue. The
              economic empowerment derived from these opportunities not only
              uplifts individual artisans but contributes to the overall
              socio-economic development of the communities they represent.
            </KeyFeature>
          </ul>
          <p>
            In the age of digital transformation, Sabhyasha Retail Tech stands
            at the forefront, championing the cause of Indian artisans through
            the Artisans' Wizard app. By combining advanced technologies like AI
            content creation, AI image enhancement, and Business Intelligence
            with the inclusivity of regional languages and voice commands, the
            app is a testament to Sabhyasha's commitment to simplicity and
            accessibility.
          </p>
          <p>
            The strategic alliance with ONDC adds a layer of robustness to this
            initiative, providing artisans with a standardized and interoperable
            digital commerce ecosystem. Through this holistic approach,
            Sabhyasha not only unlocks e-commerce for artisans but also opens
            doors to a future where traditional crafts seamlessly blend with the
            digital landscape, ensuring the preservation of cultural heritage
            and the sustained livelihoods of millions. Sabhyasha Retail Tech's
            vision is not just about creating a platform; it's about weaving a
            digital tapestry that connects the artisans of India with the world,
            one craft at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtisansWithOndc;
