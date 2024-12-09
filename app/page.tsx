'use client'

import React, { useState } from 'react';
import { SignUpForm } from '../components/SignUpForm';
import { LoginForm } from '../components/LoginForm';
import { Button } from '../components/Button';

export default function Home() {
  const [activeForm, setActiveForm] = useState<'signup' | 'login'>('signup');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            onClick={() => setActiveForm('signup')}
            variant={activeForm === 'signup' ? 'default' : 'outline'}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => setActiveForm('login')}
            variant={activeForm === 'login' ? 'default' : 'outline'}
          >
            Login
          </Button>
        </div>
        {activeForm === 'signup' ? <SignUpForm /> : <LoginForm />}
      </div>
    </main>
  );
}

