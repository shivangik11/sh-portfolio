// src/components/HomePage.js
import React, { useState } from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import { MainContainer, Logo, CompanyName, ContentSection, Footer, AboutSection, ProjectListSection, ProjectDetailsSection, ProjectDetailsHeader, Title, Text, ProjectList, StyledButton, WriteUpSection, ImageSection } from '../styles/StyledComponents';
import Navigation from './Navigation';
import { ArrowElbowRight } from 'phosphor-react';
import BackgroundAnimation from './BackgroundAnimation';
import MediaItem from './MediaItem';

const projects = [
  {
    id: 1,
    name: 'URBANPARKR',
    tools: 'Figma, Photoshop, Illustrator, Google Forms, Pen & sketch',
    timeline: '2-Months',
    subheading: 'Application Design',
    details: 'A platform that connects drivers in search of parking spaces with individuals looking to monetize their available spots. Addressed the parking issues faced by over 60% of Boulder drivers with a mobile application.',
    extendedDetails: (
      <>
        <h3>Problem</h3>
        <p>Urban cities, especially small towns with limited public transport options, often experience an increase in the number of personal vehicles. Boulder, a university town, exemplifies this issue with a high number of personal cars and limited local transport options. Consequently, finding affordable parking near the university, downtown, and areas with high community activity becomes challenging. Our goal is to address the parking problems faced by residents in these areas by providing cost-effective and accessible parking solutions.</p>
        
        <h3>Approach</h3>
        <p>My approach to designing the UrbanParkr application focused on three core values: sustainability, ease of use, and effective problem-solving. I began with extensive user behavior studies, combining qualitative methods such as in-depth interviews and focus groups with quantitative surveys and data analytics to gain a comprehensive understanding of user needs and behaviors. I learned from successful applications and case studies, integrating best practices and innovative solutions into the design process. Emphasizing out-of-the-box thinking, I held creative brainstorming sessions to generate unique ideas and evaluate unconventional approaches. Throughout the process, I carefully considered all relevant parameters, including technical feasibility, user accessibility, environmental impact, and scalability, ensuring that each design decision aligned with my core values and objectives.</p>
        
        <h3>Solution and Impact</h3>
        <p>UrbanParkr is an app that allows you to turn your unused parking space into cash by renting it out to drivers searching for parking. In essence, it's a two-way solution: it helps people earn money from their idle parking spots and provides drivers with more convenient parking options in busy city areas.</p>
      </>
    ),
    media: [
      { src: '/Videos/Video2.mp4', type: 'video', className: 'second-video' },
      { src: '/images/phonemockup.png', type: 'image', className: 'second-img'},
      { src: '/images/mainscreens.png', type: 'image', className: 'second-img'},
      { src: '/images/rentmyspotpng.png', type: 'image', className: 'second-img' },
      { src: '/images/u1.png', type: 'image', className: 'second-img'},
      { src: '/Videos/Video1.mp4', type: 'video', className: 'first-video' },
      { src: '/images/u2.png', type: 'image', className: 'first-img'},
    
    ],
   
    },
  {
    id: 2,
    name: 'STORIO',
    tools: 'Figma, Qualitrics, Photoshop, Illustrator, Pen & sketch',
    timeline: '1-Week',
    subheading: 'Application Design',
    details: 'Embark on a journey of stories with our app, designed to bridge the gap between generations and foster meaningful connections, targeting a 50% reduction in cultural homogenization and diversity loss. Awarded as runner-up for best project.',
    extendedDetails: (
      <>
      <h3>What problem are we solving here?</h3>
        <p>Urban cities, especially small towns with limited public transport options, often experience an increase in the number of personal vehicles. Boulder, a university town, exemplifies this issue with a high number of personal cars and limited local transport options. Consequently, finding affordable parking near the university, downtown, and areas with high community activity becomes challenging. Our goal is to address the parking problems faced by residents in these areas by providing cost-effective and accessible parking solutions.Modern nuclear families and diaspora leave many children feeling isolated due to distance from their home, culture and larger family units and communities. This situation is exacerbated for children from disadvantaged backgrounds, who often lack involved parental figures, who struggle to dedicate quality time, particularly during bedtime storytelling. leaving them without the crucial support and engagement needed for an emotionally and culturally enriching upbringing.</p>
      <h3> Why we should address this? </h3>
        <p>1. Children with a strong sense of cultural identity tend to have higher self-esteem and better mental health. Understanding and connecting with their cultural heritage can provide a sense of belonging and stability, which is essential for their overall psychological development and well-being.</p>
        <p>2. Culturally aware children are more likely to grow into empathetic adults with a deep understanding of diversity and multiculturalism. This awareness fosters social cohesion and tolerance, contributing to more inclusive societies where differences are respected and valued.</p>
     <h3> Product Defination </h3>
        <p>1. An engaging storytelling platform that bridges generations, encouraging the sharing of wisdom, stories, and values. This not only entertains but educates, fostering meaningful connections and instilling essential life lessons. </p>
        <p>2. A platform  designed to captivate both children and the older generation, offering content that is both engaging and culturally relevant.</p>

      </>
    ),
    media: [
      { src: '/images/storio.png', type: 'image', className: 'first-img'},
      { src: '/images/s1.png', type: 'image', className: 'first-img' },
      { src: '/images/s2.png', type: 'image', className: 'first-img' },
      { src: '/images/s3.png', type: 'image', className: 'first-img'},
      { src: '/images/s4.png', type: 'image', className: 'first-img' },
      { src: '/images/s5.png', type: 'image', className: 'first-img' },
      { src: '/images/s6.png', type: 'image', className: 'first-img' },
    ],
    },


  {
    id: 3,
    name: 'S-SQUARE STUDIO',
    tools: 'Figma, Illustrator, React.js, Vercel',
    timeline: '2-Weeks',
    subheading: 'Website Design | Brand Identity | Visual Design',
    details: ' An architectural studio based in India, focusing on establishing their digital presence and crafting a distinctive brand identity.',
    extendedDetails: (
      <>
      <h3>Design Philosphy</h3>
        <p>This studio champions minimalism, a principle that deeply resonates within their architectural philosophy. Embracing this core tenet, I developed a visual identity that reflects simplicity and elegance, ensuring it permeates every aspect of their digital footprint. </p>
      <h3> Approach </h3>
        <p>My approach was methodical: I first immersed myself in understanding the nuances of minimalistic design, then methodically applied these principles across all digital media to create a cohesive and recognizable brand. This not only distinguished their online presence but also positioned them uniquely in the competitive market, providing a clear, visual representation of their values and aesthetic approach.</p>
        
      </>
    ),
    media: [
      { src: '/Videos/slogo.mp4', type: 'video', className: 'second-video'},
      { src: '/images/square1.png', type: 'image', className: 'first-img' },
      { src: '/images/square2.png', type: 'image', className: 'first-img' },
      { src: '/images/square3.png', type: 'image', className: 'first-img' },
      { src: '/images/square4.png', type: 'image', className: 'first-img' },
      
    ],
    writeUp: 'Write up content for Project 2'
  },

  {
    id: 4,
  name: 'LIGER',
  tools: 'Figma, Framer, Photoshop, Illustrator, Pen & sketch',
  timeline: '2-Weeks',
  subheading: 'Website Design | Brand Identity | Visual Design',
  details: 'Liger Shipping a logistic consultant company looking to establish their digital presence in the era of rapid tech advancement. Through the website, we crafted a platform that not only showcases Shipping expertise and services but also resonates with the expectations of todays tech-savvy clients.',
  extendedDetails: (
    <>
    <h3> Brand & Website Design </h3>
     <p>Liger Shipping a logistic consultant company looking to establish their digital presence in the era of rapid tech advancement. Through the website, we crafted a platform that not only showcases Shipping expertise and services but also resonates with the expectations of today's tech-savvy clients.</p>
    <h3> The Problem </h3>
     <p>Liger Shipping Company faces the challenge of distinguishing itself in a crowded logistics market. Our current digital presence and brand identity are inadequate, failing to clearly communicate our value proposition and optimize the customer experience. We need a robust brand strategy that includes a unique identity, consistent messaging, and an engaging digital presence to build trust and loyalty among customers.</p>
    <h3> The Approach </h3>
     <p> Our approach focuses on developing a distinctive brand identity and a comprehensive digital presence for Liger Shipping Company. We will conduct a thorough market study to understand customer preferences and industry trends, and incorporate trending visual identity designs to create an engaging, user-friendly designs that showcases our expertise and services. Additionally, we will analyze successful and unsuccessful branding strategies to ensure our approach is informed and effective.  </p>
    <h3> Look & feel </h3>
     <p>In crafting the visual identity for Liger Shipping, we meticulously selected a color palette of dark blues, embodying the various shades of water to mirror the company's core shipping services. 
        The logo, with its wave motifs, harmonizes with this theme, reinforcing the company's identity as a leader in logistics through a visual narrative that is both depicts water and tiger as the logo means Logistics+ Tiger = Liger.</p>
</>
  ),
  media: [
    { src: '/images/l1.png', type: 'image', className: 'first-img' },
    { src: '/images/l2.png', type: 'image', className: 'first-img' },
    { src: '/images/l3.png', type: 'image', className: 'first-img'},
    { src: '/images/l4.png', type: 'image', className: 'first-img' },
    { src: '/images/l5.png', type: 'image' , className: 'first-img'},
    { src: '/images/l6.png', type: 'image' , className: 'first-img'},
   ],
  },
{
id: 5,
name: 'GRAPHIC DESIGN',
tools: 'Figma, Adobe XD Photoshop, Illustrator, Procreate',
timeline: 'few Weeks',
subheading: 'Illustrations | Posters | Infographics',
details: 'The Graphic Design section of the website showcases a vibrant portfolio of diverse projects that highlight expertise in creating compelling visual content.',
extendedDetails: (
  <>
  <h3> Approach </h3>
   <p>My approach involves a thorough understanding of color theory, typography, and composition, which are leveraged to create designs that are not only beautiful but also purposeful. With every project, I aim to push the boundaries of conventional design to create unique, memorable graphics that stand out in the crowded digital landscape.</p>
  </>
),
media: [
  { src: '/images/g1.png', type: 'image', className: 'second-img' },
  { src: '/images/g2.png', type: 'image', className: 'second-img' },
  { src: '/images/g3.png', type: 'image', className: 'second-img' },
  { src: '/images/g4.png', type: 'image', className: 'second-img' },
  { src: '/images/g5.png', type: 'image', className: 'second-img' },
  { src: '/images/g6.png', type: 'image', className: 'second-img' },
  { src: '/images/g7.png', type: 'image', className:'second-img'},
],
},

{
  id: 6,
  name: 'MOTION DESIGN',
  subheading: 'Coming soon',
  details: 'coming soon',
},



  // other projects...
];

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [showWriteUp, setShowWriteUp] = useState(false);

  const handleToggleSection = () => {
    setShowWriteUp(!showWriteUp);
  };

  return (
    <>
      <GlobalStyle />
      <BackgroundAnimation />
      <MainContainer>
        <Logo>
        <img src="/images/logo.svg" alt="Company Logo" />
        </Logo>
        <Navigation />
        <CompanyName>SHIVANGI KHANDELWAL</CompanyName>
        <ContentSection>
          <AboutSection>
            <Title>ABOUT ME</Title>
             <Text>
              As a passionate and innovative Product Designer, I specialize in creating intuitive and engaging user experiences that seamlessly blend form and function. <br/><br/>My design philosophy is grounded in empathy, simplicity, and strategic thinking, ensuring every solution is user-centric and impactful. I approach problems with a meticulous process of research, ideation, and iteration, always open to feedback and new perspectives.<br/><br/> By combining contemporary trends with timeless principles, I deliver designs that not only meet but exceed client expectations, driving meaningful engagement and lasting success.<br></br>
             </Text>
            <h3>Design Philosophy</h3>
              <ul>
                <li><img src="/images/philosophy.svg" alt="Empathy" /> Crafting with empathy and an open mind</li>
                <li><img src="/images/philosophy.svg"  alt="Simplicity" /> Iterative design strategy</li>
                <li><img src="/images/philosophy.svg"  alt="Strategy" /> Lot of brainstorming</li>
                <li><img src="/images/philosophy.svg"  alt="Strategy" /> Open to Ideas and different possibilities</li>
                <li><img src="/images/philosophy.svg"  alt="Strategy" /> Feedback drives some of the best solutions</li>
              </ul>
            <h3>What's uniques about me</h3>
            <ul>
                <li><img src="/images/unique.svg" alt="Empathy" /> Quick learner & tech enthusiast</li>
                <li><img src="/images/unique.svg"  alt="Simplicity" /> Easy to talk to & open to feedback</li>
                <li><img src="/images/unique.svg"  alt="Strategy" /> Curious mind that asks lot of questions</li>
                <li><img src="/images/unique.svg"  alt="Strategy" /> Optimism stands at the top</li>
                <li><img src="/images/unique.svg"  alt="Strategy" /> Love for aesthetic & visual design</li>
              </ul>
          </AboutSection>
          <ProjectListSection>
            <Title>PROJECTS</Title>
            <ProjectList>
              {projects.map(project => (
                <li
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={selectedProject.id === project.id ? 'active' : ''}
                >
                  <div>
                    <strong>{project.name}</strong>
                    <br />
                    <small>{project.subheading}</small>
                  </div>
                  <ArrowElbowRight size={32} className="arrow" />
                </li>
              ))}
            </ProjectList>
          </ProjectListSection>
          <ProjectDetailsSection>
      <ProjectDetailsHeader>
        <Title>PROJECT DETAILS</Title>
        <StyledButton onClick={handleToggleSection}>
          <span className="text">{showWriteUp ? 'Visuals' : 'Read More'}</span>
          <ArrowElbowRight className="arrow" size={20} />
        </StyledButton>
      </ProjectDetailsHeader>
      {showWriteUp ? (
        <WriteUpSection>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, marginRight: '30px' }}>
              <h2>Overview</h2>
              <p>{selectedProject.details}</p> {/* Assuming this is the first paragraph */}
            </div>
            <div style={{ flex: 1 }}>
              <h2>Tools and Timeline</h2>
              <p>{selectedProject.tools}</p>
              <p> {selectedProject.timeline}</p>
            </div>
          </div>
          <div>
            {/* The rest of the content */}
            <p>{selectedProject.extendedDetails}</p> {/* Additional details */}
          </div>
        </WriteUpSection>
      ) : (
        <ImageSection>
          {selectedProject.media.map((item, index) => (
            <MediaItem key={index} src={item.src} type={item.type} className={item.className} />
          ))}
        </ImageSection>
      )}
    </ProjectDetailsSection>
        </ContentSection>
        <Footer>
          
        <a href="www.linkedin.com/in/shivangik11" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.shivangikhandelwal.com/" target="_blank" rel="noopener noreferrer">Product Design Portfolio</a>
        <a href="mailto:shivangik1599@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>      
        <p> ©2021 Shivangi Khandewal,  inspired by StudioFreight's website </p>
      
    </Footer>
      </MainContainer>
    </>
  );
};

export default HomePage;
