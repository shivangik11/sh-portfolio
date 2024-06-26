const HomePage = () => {
  const [activeSection, setActiveSection] = useState('about');  // Default to 'about'

  const handleSectionToggle = (section) => {
    setActiveSection(section);  // Set active section
  };

  return (
    <>
      <GlobalStyle />
      <BackgroundAnimation />
      <MainContainer>
        <Logo>Logo Here</Logo>
        <Navigation />
        <CompanyName>SHIVANGI KHANDELWAL</CompanyName>
        <ContentSection>
          <AboutSection onClick={() => handleSectionToggle('about')} style={{ height: activeSection === 'about' ? '100vh' : 'auto' }}>
            <Title>ABOUT US</Title>
            <Text>Description here...</Text>
          </AboutSection>
          <ProjectListSection onClick={() => handleSectionToggle('projects')} style={{ height: activeSection === 'projects' ? '100vh' : 'auto' }}>
            <Title>OUR PROJECTS</Title>
            {/* Project list items */}
          </ProjectListSection>
          <ProjectDetailsSection onClick={() => handleSectionToggle('details')} style={{ height: activeSection === 'details' ? '100vh' : 'auto' }}>
            <Title>PROJECT DETAILS</Title>
            {/* Project details content */}
          </ProjectDetailsSection>
        </ContentSection>
        <Footer>Footer Content</Footer>
      </MainContainer>
    </>
  );
};
