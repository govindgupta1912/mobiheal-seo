import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100 hover:shadow-md transition-shadow">
      <div className="text-primary text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
