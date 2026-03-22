export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Scroll to the section, accounting for navbar (80px) and section top padding
    const navHeight = 80;
    const sectionTopPadding = 128; // py-32 = 128px
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navHeight - sectionTopPadding;
    
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });
  }
};
