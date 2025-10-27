import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  { icon: '📧', title: 'Email Automation System', desc: 'Built Python-based automation scripts that send scheduled emails with attachments and summaries, helping businesses streamline communication and save time.', tags: ['Python', 'SMTP', 'Automation', 'Scheduling'] },
  { icon: '🕷️', title: 'Intelligent Web Scraper', desc: 'Developed intelligent web scrapers to collect structured data from websites for research, market insights, and competitive analysis.', tags: ['Python', 'Selenium', 'Data Mining', 'BeautifulSoup'] },
  { icon: '📊', title: 'Data Generation Tools', desc: 'Created data generation tools that produce clean, formatted datasets for testing, machine learning models, and analytics projects.', tags: ['Python', 'Pandas', 'Faker', 'ML Datasets'] },
  { icon: '🎯', title: 'Lead Generation System', desc: 'Delivered automated lead generation systems that collect potential client data from online sources, boosting sales pipelines for startups and agencies.', tags: ['Automation', 'CRM Integration', "Api's", 'Data Collection'] },
  { icon: '💻', title: 'Responsive Websites', desc: 'Designed and developed responsive, user-friendly websites using HTML, CSS, JavaScript, and Bootstrap, tailored to client needs.', tags: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'] },
  { icon: '📱', title: 'Mobile Applications', desc: 'Built cross-platform mobile apps with intuitive UX/UI, covering business tools, educational apps, and client-specific solutions.', tags: ['Flutter', 'UI / UX'] },
  { icon: '🎮', title: '3D Models & Animations', desc: 'Crafted detailed 3D assets and animated content for games, ads, and YouTube channels, including characters, props, and environments.', tags: ['Blender', '3D-Modeling', 'Animation', 'Game Assets'] },
  { icon: '🛒', title: 'E-commerce Stores', desc: 'Developed complete online stores with product catalogs, shopping carts, and payment integrations, helping clients take their businesses online.', tags: ['WooCommerce', 'Shopify', 'Payment gateway', 'Inventory Management'] },
  { icon: '📣', title: 'Digital Marketing Campaigns', desc: 'Executed successful branding and digital marketing campaigns, including social media ads, content creation, and promotional strategies to boost online visibility.', tags: ['Social Media', 'SEO', 'Content Marketing', 'Analytics'] },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section-header container">
        <p style={{ fontSize: '40px' }} id='portfolio'>
          Our <span className="highlight" style={{ color: "#00d4ff" }}>Project Portfolio</span>
        </p>
        <p>Real-world solutions we've delivered for our clients</p>
      </div>

      <div className="portfolio-grid container">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={20}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            430: { slidesPerView: 1, slidesPerGroup: 1 },
          }}
        >
          {projects.map((p, idx) => (
            <SwiperSlide key={idx}>
              <div className="portfolio-item">
                <div className="portfolio-image">{p.icon}</div>
                <div className="portfolio-content">
                  <h3>{idx + 1}️⃣ {p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="portfolio-tags">
                    {p.tags.map((t, i) => (
                      <span className="tag" key={i}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
