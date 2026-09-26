import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_VITE_EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_VITE_EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_VITE_EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

let initialized = false;

export const initEmailJS = () => {
  if (!initialized && EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    initialized = true;
  }
};

export interface EmailParams {
  from_name: string;
  from_email: string;
  company?: string;
  interest?: string;
  message: string;
  [key: string]: unknown;
}

export const sendEmail = async (params: EmailParams) => {
  if (!initialized) initEmailJS();
  
  if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      ...params,
      to_email: 'arpitrautela01@indorsetech.com',
    });
  }
  return Promise.reject(new Error('EmailJS not configured'));
};
