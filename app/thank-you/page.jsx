"use client"
import PageWrapper from '@/components/ui/PageWrapper';
import { useFormContext } from '@/context/FormContext';
import { useEffect } from 'react';

export default function ThankYou() {
  const { formData } = useFormContext();

  useEffect(() => {
    // Here you would implement the email sending functionality
    // You'll need to set up an API route and use a service like SendGrid or Nodemailer
    console.log('Form data to be sent:', formData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper>
          <h2 className="text-2xl font-bold mb-6">Thank You!</h2>
          <div className="space-y-6">
            <p className="inline">
              Thank you for checking out this project! <br/>
              Please reach out and connect on
            <a href="https://www.linkedin.com/in/bryant-mejia-085669331" target="_blank" className='font-bold text-[rgb(10,102,194)]'> Linkedin </a>
            or email me at 
            <a href="mailto:bryantmejia722@outlook.com" target="_blank" className="inline font-bold text-gray-700"> bryantmejia722@outlook.com</a>
            .</p>
            <blockquote className="text-gray-700 border-l-4 border-gray-300 pl-4 italic">
              &quot;There&apos;s something happening in life beyond just a job, family, and a career, that makes people want to be poets instead of bankers. 
              I think that same spirit can be put into products, and those products can be given to people.&quot;
              <footer className="text-gray-500 mt-2">- Steve Jobs</footer>
            </blockquote>
          </div>
    </PageWrapper>
  );
}