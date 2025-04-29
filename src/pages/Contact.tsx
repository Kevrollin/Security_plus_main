
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      values: ["+254 757 086 742", "+254 708 889 092"]
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      values: ["kelvinmukaria012@gmail.com", "kelvinmukaria2023@gmail.com"]
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      values: ["Nakuru, Kenya"]
    }
  ];
  
  return (
    <Layout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Contact Us"
            subtitle="Have questions or need assistance? We're here to help!"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card border rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {info.icon}
                </div>
                <h3 className="font-semibold mb-3">{info.label}</h3>
                <div className="space-y-1">
                  {info.values.map((value, i) => (
                    <p key={i} className="text-muted-foreground">{value}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 font-heading">Send us a message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 text-green-800 dark:text-green-300 rounded-lg p-4 mb-6">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : submitError ? (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-300 rounded-lg p-4 mb-6">
                  <p>There was an error sending your message. Please try again later.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* WhatsApp */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 font-heading">Prefer instant support?</h2>
              <div className="bg-card border rounded-lg p-6">
                <p className="mb-6">
                  Get quick answers to your cybersecurity questions by connecting with us directly on WhatsApp. 
                  Our team is ready to assist you with your security concerns and provide guidance.
                </p>
                <a
                  href="https://wa.me/254757086742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md py-3 px-6 inline-flex items-center transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with us on WhatsApp
                </a>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 font-heading">Business Hours</h3>
                <div className="bg-card border rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM EAT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM EAT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
