
import { useState } from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';
import CatalogSection from '@/components/CatalogSection';
import WellnessGuideSection from '@/components/WellnessGuideSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('contact');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'contact':
        return <ContactSection />;
      case 'blog':
        return <BlogSection />;
      case 'catalog':
        return <CatalogSection />;
      case 'wellness':
        return <WellnessGuideSection />;
      default:
        return <ContactSection />;
    }
  };

  return (
    <div className="min-h-screen bg-sage-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-4">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
