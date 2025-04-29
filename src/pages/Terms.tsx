
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";

export default function Terms() {
  return (
    <Layout showWhatsApp={false}>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            title="Terms of Service" 
            centered
          />
          
          <div className="prose max-w-none dark:prose-invert">
            <p>Last Updated: April 28, 2025</p>
            
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully 
              before using the SecurityPlus website (the "Service") operated by SecurityPlus ("us", "we", or "our").
            </p>
            
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with 
              these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree 
              with any part of the terms, then you may not access the Service.
            </p>
            
            <h2>Content</h2>
            <p>
              Our Service allows you to view, access, and purchase cybersecurity-related content 
              ("Content"). The Content includes articles, guides, and other materials related to cybersecurity.
            </p>
            
            <p>
              The Content on our website is for general information purposes only. We strive to provide 
              accurate and up-to-date information, but we make no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, or availability 
              of the information contained on our website.
            </p>
            
            <h2>Purchases</h2>
            <p>
              If you wish to purchase any product or service made available through the Service ("Purchase"), 
              you may be asked to supply certain information relevant to your Purchase including your contact 
              information and payment details.
            </p>
            
            <p>
              For articles purchased through our Marketplace:
            </p>
            <ul>
              <li>Payment is required before delivery of the Content.</li>
              <li>
                Once purchased, you may use the Content for your personal or business purposes, but you may not 
                resell or redistribute the Content without our express written permission.
              </li>
              <li>
                We retain copyright and intellectual property rights to all Content even after purchase.
              </li>
            </ul>
            
            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features, and functionality 
              are and will remain the exclusive property of SecurityPlus and its licensors. The Service is protected 
              by copyright, trademark, and other laws of both Kenya and foreign countries. Our trademarks and trade 
              dress may not be used in connection with any product or service without the prior written consent of SecurityPlus.
            </p>
            
            <h2>Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by SecurityPlus.
            </p>
            
            <p>
              SecurityPlus has no control over, and assumes no responsibility for, the content, privacy policies, 
              or practices of any third-party web sites or services. You further acknowledge and agree that 
              SecurityPlus shall not be responsible or liable, directly or indirectly, for any damage or loss 
              caused or alleged to be caused by or in connection with use of or reliance on any such content, 
              goods, or services available on or through any such web sites or services.
            </p>
            
            <h2>Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2>Limitation Of Liability</h2>
            <p>
              In no event shall SecurityPlus, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Service;</li>
              <li>Any conduct or content of any third party on the Service;</li>
              <li>Any content obtained from the Service; and</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>
            
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Kenya, without regard 
              to its conflict of law provisions.
            </p>
            
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
            
            <h2>Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material we will try to provide at least 30 days' notice prior to any new 
              terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: kelvinmukaria012@gmail.com<br />
              Phone: +254 757 086 742
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
