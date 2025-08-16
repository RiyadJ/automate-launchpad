import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy = ({ isOpen, onClose }: PrivacyPolicyProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-3">1. Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We collect information you provide directly to us, such as when you contact us for consultation, 
                request automation services, or communicate with us. This may include your name, email address, 
                phone number, company information, and details about your business processes.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">2. How We Use Your Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Provide, maintain, and improve our automation services</li>
                <li>Communicate with you about our services and respond to your inquiries</li>
                <li>Develop custom AI and automation solutions for your business</li>
                <li>Send you technical updates, security alerts, and administrative messages</li>
                <li>Analyze usage patterns to improve our service offerings</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">3. Information Sharing</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>With trusted service providers who assist in our operations under strict confidentiality agreements</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">4. Data Security</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
                secure data transmission, and regular security assessments.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">5. AI and Automation Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                When providing AI and automation services, we may process your business data to develop and 
                implement custom solutions. All client data is handled with strict confidentiality and is not 
                used to train general AI models or shared with other clients.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">6. Data Retention</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                in this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">7. Your Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You have the right to access, update, or delete your personal information. You may also opt out 
                of certain communications from us. To exercise these rights, please contact us at Riyad@aotumate.com.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">8. Changes to This Policy</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may update this privacy policy from time to time. We will notify you of any material changes 
                by posting the new policy on our website and updating the effective date.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">9. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact us at 
                Riyad@aotumate.com.
              </p>
            </section>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;