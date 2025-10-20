import { SatelliteHero } from '../components/Hero';

const SatelliteHeroDemo = () => {
  return (
    <div>
      {/* Hero Section */}
      <SatelliteHero
        title="Discover our latest scientific publications"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        breadcrumbItems={[
          { label: "Research", path: "/research" },
          { label: "Publications" }
        ]}
        primaryButtonText="Learn More"
        secondaryButtonText="Browse Articles"
        onPrimaryClick={() => console.log('Learn More clicked')}
        onSecondaryClick={() => console.log('Browse Articles clicked')}
      
      />

      {/* Info Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-green2 mb-6">
              Satellite Hero Component
            </h2>
            <p className="text-lg text-green2/80 mb-8">
              A stunning hero section featuring a high-quality satellite image with smooth animations,
              curved flowing lines background, and interactive elements.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Features */}
              <div className="bg-gradient-to-br from-darkgreen/5 to-darkgreen/10 p-6 rounded-xl border border-darkgreen/20">
                <h3 className="text-xl font-bold text-green2 mb-4">✨ Features</h3>
                <ul className="space-y-2 text-green2/80">
                  <li>• High-quality satellite image</li>
                  <li>• Smooth floating animation</li>
                  <li>• Curved flowing lines background</li>
                  <li>• Rotating orbit rings</li>
                  <li>• Interactive stat cards</li>
                  <li>• Responsive design</li>
                  <li>• Ambient glow effects</li>
                  <li>• Signal pulse effects</li>
                </ul>
              </div>

              {/* Usage */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Usage</h3>
                <div className="text-sm text-blue-800 font-mono bg-blue-900/10 p-4 rounded-lg">
                  <pre className="overflow-x-auto">
{`import { SatelliteHero } from 
  './components/Hero';

<SatelliteHero
  title="Your Title"
  subtitle="Your subtitle..."
  primaryButtonText="Learn More"
  secondaryButtonText="Get Started"
  stats={[
    { value: "200+", label: "Metric" }
  ]}
/>`}
                  </pre>
                </div>
              </div>

              {/* Customization */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">🎨 Customizable</h3>
                <ul className="space-y-2 text-purple-800">
                  <li>• Title and subtitle text</li>
                  <li>• Button labels and actions</li>
                  <li>• Statistics data</li>
                  <li>• Colors and styles</li>
                  <li>• Animation speeds</li>
                </ul>
              </div>

              {/* Best For */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">💡 Best For</h3>
                <ul className="space-y-2 text-emerald-800">
                  <li>• Homepage hero sections</li>
                  <li>• Research pages</li>
                  <li>• Technology showcases</li>
                  <li>• Scientific platforms</li>
                  <li>• Space-related content</li>
                </ul>
              </div>
            </div>

            {/* Code Example */}
            <div className="mt-12 p-8 bg-slate-900 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">📝 Complete Example</h3>
              <pre className="text-sm text-slate-300 overflow-x-auto">
{`import { SatelliteHero } from './components/Hero';

const MyPage = () => {
  return (
    <SatelliteHero
      title="Discover our latest scientific publications"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      primaryButtonText="Learn More"
      secondaryButtonText="Browse Articles"
      onPrimaryClick={() => navigate('/about')}
      onSecondaryClick={() => navigate('/articles')}
      stats={[
        { value: "200+", label: "Scientific Publication" },
        { value: "10k+", label: "Team Member" },
        { value: "5+", label: "Case Study" },
      ]}
    />
  );
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SatelliteHeroDemo;
