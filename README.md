# Form Project

This project is a React application that implements Sign Up and Login forms using Formik for form handling and validation. It's built with Next.js, TypeScript, and Tailwind CSS.

## How to Run the Project

1. Clone the repository to your local machine.

2. Install the dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Choices

1. **Next.js**: Chosen for its server-side rendering capabilities and optimized performance.

2. **TypeScript**: Used for type safety and improved developer experience.

3. **Formik**: Implemented for efficient form handling and validation.

4. **Yup**: Used in conjunction with Formik for schema-based form validation.

5. **Tailwind CSS**: Utilized for rapid UI development and consistent styling.

6. **shadcn/ui**: Employed for pre-built, customizable UI components.

7. **Component Structure**: The application is divided into reusable components (SignUpForm, LoginForm, Button, PasswordStrength) for better organization and maintainability.

8. **Accessibility**: ARIA attributes and semantic HTML are used to ensure the forms are accessible.

9. **User Experience**: 
   - Form validation with clear error messages
   - Password strength indicator
   - Success messages upon form submission
   - "Remember Me" functionality for login

## Assumptions and Limitations

1. **Backend Integration**: This project focuses on the frontend implementation. It assumes that a backend API would be integrated for actual authentication and data persistence.

2. **Local Storage**: The "Remember Me" feature uses local storage, which is not secure for storing sensitive information in a production environment.

3. **Password Security**: While there's a password strength indicator, additional security measures (like password hashing) would need to be implemented on the backend.

4. **Error Handling**: The current implementation shows basic error messages. In a production environment, more comprehensive error handling would be necessary.

5. **Testing**: This version doesn't include unit or integration tests, which would be crucial for a production-ready application.

6. **Responsiveness**: While the UI is designed to be responsive, it may need further optimization for a wide range of devices and screen sizes.

7. **Browser Compatibility**: The application is built with modern web technologies and may not support older browsers without additional polyfills or adjustments.

