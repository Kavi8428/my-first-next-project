import React from 'react';
import { Newspaper, Users, ChartBar } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Newspaper className="w-12 h-12 text-blue-600" />,
      title: 'Latest News',
      description: 'Stay updated with the most recent and trending articles from around the world.'
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'Community',
      description: 'Connect with like-minded individuals and share your thoughts and experiences.'
    },
    {
      icon: <ChartBar className="w-12 h-12 text-purple-600" />,
      title: 'Analytics',
      description: 'Gain insights with our powerful data visualization and tracking tools.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-500 flex flex-col">
      {/* Navigation */}
     

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to MyApp</h1>
          <p className="text-xl mb-8">Discover amazing features and transform your digital experience</p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}