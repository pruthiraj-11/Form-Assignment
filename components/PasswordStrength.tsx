import React from 'react';
import { Progress } from "@/components/ui/progress"

interface PasswordStrengthProps {
  strength: number;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ strength }) => {
  const getColor = (strength: number) => {
    if (strength <= 2) return 'bg-red-500';
    if (strength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="mt-2">
      <Progress value={strength * 20} className={`h-2 ${getColor(strength)}`} />
      <p className="text-sm mt-1">Password strength: {strength}/5</p>
    </div>
  );
};

