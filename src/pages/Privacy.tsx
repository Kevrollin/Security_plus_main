
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";

export default function Privacy() {
  return (
    <Layout showWhatsApp={false}>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            title="Privacy Policy" 
            centered
          />
          
          <div className="prose max-w-none dark:prose-invert">
            <p>Last Updated: April 28, 2025</p>
            
            <p>
              At SecurityPlus, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways including:</p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Voluntarily provided information which may include your name, 
                email address, and phone number that you share when filling out contact forms or ordering articles.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access 
                our site, such as your IP address, browser type, operating system, access times, and the pages 
                you have viewed directly before and after accessing the website.
              </li>
              <li>
                <strong>Cookies and Web Beacons:</strong> We may use cookies, web beacons, tracking pixels, 
                and other tracking technologies to help customize the website and improve your experience.
              </li>
            </ul>
            
            <h2>Use of Your Information</h2>
            <p>We may use the information we collect about you to:</p>
            <ul>
              <li>Fulfill and manage orders for articles or services</li>
              <li>Send you administrative information such as order confirmations</li>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you newsletters and other updates if you've subscribed</li>
              <li>Process payments and prevent fraud</li>
              <li>Improve and optimize our website</li>
              <li>Analyze website usage and trends</li>
            </ul>
            
            <h2>Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations, including:</p>
            <ul>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale 
                of all or a portion of our assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties 
                that perform services for us or on our behalf, such as payment processing and data analysis.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information where required by law or 
                if we believe such action is necessary to comply with a legal obligation.
              </li>
            </ul>
            
            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. 
              While we have taken reasonable steps to secure the information you provide to us, please be aware that 
              no security measures are perfect or impenetrable.
            </p>
            
            <h2>Cookies and Web Beacons</h2>
            <p>
              Our website may use cookies to enhance your experience. A cookie is a small piece of data stored on 
              your computer by your web browser. We use cookies to identify when you return to our website and track 
              certain information about your browsing habits. You can choose to disable cookies through your browser 
              settings, although doing so may affect the functionality of our website.
            </p>
            
            <h2>Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites and applications. We are not responsible for 
              the privacy practices or the content of these third-party sites. We encourage you to review the 
              privacy policy of any third-party site you visit.
            </p>
            
            <h2>Children's Privacy</h2>
            <p>
              Our website is not directed to children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you are under 13, please do not provide any information on 
              this website.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
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
