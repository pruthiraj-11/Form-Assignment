import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { SignupSchema, calculatePasswordStrength } from '../utils/validation';
import { Button } from './Button';
import { PasswordStrength } from './PasswordStrength';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface SignUpValues {
  name: string;
  email: string;
  password: string;
}

export const SignUpForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values: SignUpValues, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values);
            setSuccessMessage('Sign Up Successful');
            setSubmitting(false);
            resetForm();
            setPasswordStrength(0);
          }, 500);
        }}
      >
        {({ errors, touched, isSubmitting, setFieldValue }) => (
          <Form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Field
                as={Input}
                id="name"
                name="name"
                placeholder="Your Name"
                aria-describedby="nameError"
              />
              {errors.name && touched.name && <div id="nameError" className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                aria-describedby="emailError"
              />
              {errors.email && touched.email && <div id="emailError" className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Field
                as={Input}
                id="password"
                name="password"
                type="password"
                placeholder="********"
                aria-describedby="passwordError"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('password', e.target.value);
                  setPasswordStrength(calculatePasswordStrength(e.target.value));
                }}
              />
              {errors.password && touched.password && <div id="passwordError" className="text-red-500 text-sm mt-1">{errors.password}</div>}
              <PasswordStrength strength={passwordStrength} />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      {successMessage && (
        <Alert className="mt-4">
          <AlertDescription>{successMessage}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

