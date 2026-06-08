import React from 'react';
import * as Icons from 'lucide-react';

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function SkillIcon({ name, className = '', size = 24 }: SkillIconProps) {
  // Map names to specific Lucide icons or fallback
  const IconComponent = (Icons as any)[name] || Icons.Code2;
  return <IconComponent className={className} size={size} />;
}
