import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { LoginSchema } from '../utils/validation';
import { saveEmail, getRememberedEmail } from '../utils/localStorage';
import { Button } from './Button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface LoginValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const LoginForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [rememberedEmail, setRememberedEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = getRememberedEmail();
    if (email) {
      setRememberedEmail(email);
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Formik
        initialValues={{ email: rememberedEmail || '', password: '', rememberMe: false }}
        validationSchema={LoginSchema}
        onSubmit={(values: LoginValues, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values);
            if (values.rememberMe) {
              saveEmail(values.email);
            }
            setSuccessMessage('Login Successful');
            setSubmitting(false);
            resetForm();
          }, 500);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-4">
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
              />
              {errors.password && touched.password && <div id="passwordError" className="text-red-500 text-sm mt-1">{errors.password}</div>}
            </div>

            <div className="flex items-center space-x-2">
              <Field
                as={Checkbox}
                id="rememberMe"
                name="rememberMe"
              />
              <Label htmlFor="rememberMe">Remember Me</Label>
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Login
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

