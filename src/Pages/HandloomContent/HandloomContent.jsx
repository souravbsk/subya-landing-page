import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import HandloomPera from "./HandloomPera";
import { ScrollRestoration } from "react-router-dom";

const HandloomContent = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12">
        <div className=" mb-8">
          <SectionTitle title="Handloom and Handicrafts: Empowering Livelihoods Across India"></SectionTitle>
          <div className="space-y-3">
            <HandloomPera
              text="Handloom and handicrafts play a pivotal role in India's cultural
              tapestry and economic landscape. For over two centuries, these
              traditional crafts have been the livelihood backbone for millions
              of skilled artisans, providing employment opportunities and
              preserving rich cultural heritage. The impact of handloom and
              handicrafts on the livelihoods of approximately 20 crore Indians,
              delving into the intricate threads that weave economic sustenance
              and cultural preservation."
            ></HandloomPera>
            <HandloomPera
              text="India has a long and illustrious history of handloom and
              handicraft traditions. These crafts have been passed down through
              generations, each artisan contributing to the preservation of
              diverse art forms. From the vibrant tapestries of Rajasthan to the
              delicate Pashmina shawls of Kashmir, every region has its unique
              craft, showcasing the country's cultural diversity."
            ></HandloomPera>
            <HandloomPera
              text="The handloom and handicraft sector serve as a significant
            contributor to India's economy, particularly in rural areas.
            According to estimates, around 20 crore individuals depend on
            these crafts for their livelihood. These artisans, often working
            in clusters, create a wide array of products, including textiles,
            pottery, metalwork, woodcraft, and more. The economic impact
            extends beyond the artisans themselves, influencing the entire
            supply chain, from raw material providers to traders."
            ></HandloomPera>

            <HandloomPera
              text="One of the sector's most significant contributions is the
              generation of employment opportunities. Artisans engaged in
              handloom and handicraft activities form a crucial part of the
              unorganized labor sector. Women, in particular, play a substantial
              role in many of these crafts, contributing not only to their
              family income but also to community development. The sector's
              decentralized nature ensures that economic benefits are
              distributed across various regions, promoting inclusive growth."
            ></HandloomPera>
            <HandloomPera
              text="Handloom and handicrafts are not just about economic sustenance;
              they are a living testament to India's rich cultural heritage.
              Each craft tells a story, reflecting the traditions, rituals, and
              history of its origin. By engaging in these crafts, artisans
              become custodians of cultural knowledge, passing down skills from
              one generation to the next. The sector's resilience in preserving
              traditional art forms contributes to the nation's identity and
              global recognition."
            ></HandloomPera>
            <HandloomPera
              text="Despite the sector's significant role, Indian artisans face
              numerous challenges. Limited access to modern markets, inadequate
              infrastructure, lack of financial support, and competition from
              mass-produced goods are some of the obstacles that hinder their
              progress. Additionally, the COVID-19 pandemic exposed
              vulnerabilities, disrupting supply chains and impacting the income
              of many artisans who heavily rely on physical marketplaces."
            ></HandloomPera>
            <HandloomPera text="The digital divide further exacerbates challenges for artisans. While the world embraces e-commerce and digital platforms, many Indian artisans, particularly those in remote areas, struggle with limited digital literacy. The absence of a robust online presence restricts their market reach, making it imperative to bridge this gap to unlock new opportunities."></HandloomPera>

            <HandloomPera text="Recognizing the importance of handloom and handicrafts, the government has implemented various initiatives to support artisans. Schemes like the Prime Minister's Employment Generation Programme (PMEGP) and the National Handicrafts and Handlooms Museum aim to provide financial assistance, skill development, and market exposure to artisans. However, there is a continuous need for comprehensive policies that address the sector's evolving challenges."></HandloomPera>
            <HandloomPera text="Several non-governmental organizations and social enterprises have stepped up to support Indian artisans. By creating platforms that connect artisans with a broader market, offering training programs, and advocating for fair trade practices, these organizations contribute to the sector's sustainable development."></HandloomPera>
            <HandloomPera text="Sabhyasha Retail Tech, through its Artisans' Wizard app, presents a pioneering solution to address the challenges faced by Indian artisans. By leveraging the ONDC framework developed by the Government of India, the app acts as a bridge, connecting remote artisans to the modern e-commerce market. The user-friendly platform empowers artisans to showcase their craftsmanship, gain wider visibility, and handle all aspects of their online business seamlessly."></HandloomPera>
            <HandloomPera text="The app's impact extends beyond economic empowerment. It plays a crucial role in breaking the barriers of digital literacy, providing artisans with the tools to thrive in the digital age. Sabhyasha's commitment to preserving cultural heritage aligns with the broader mission of fostering sustainable development in the handloom and handicraft sector."></HandloomPera>
            <HandloomPera text="The handloom and handicraft sector's influence on the livelihoods of 20 crore Indians is profound, intertwining economic sustenance with cultural preservation. As we navigate the evolving landscape of traditional crafts, innovative solutions like Sabhyasha Retail Tech's Artisans' Wizard app illuminate a path toward a brighter, more inclusive future for Indian artisans. By addressing challenges, embracing technology, and fostering collaborative efforts, we can ensure the continued vibrancy of handloom and handicrafts, sustaining livelihoods and cultural legacies for generations to come."></HandloomPera>
          </div>
        </div>
        <ScrollRestoration />
      </div>
    </section>
  );
};

export default HandloomContent;
