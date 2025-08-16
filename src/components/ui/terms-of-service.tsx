import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService = ({ isOpen, onClose }: TermsOfServiceProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                By accessing or using Aotumate's services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">2. Description of Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Aotumate provides AI-powered automation solutions and consulting services to help businesses 
                optimize their processes. Our services include process analysis, custom automation development, 
                system integration, and ongoing support.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">3. Service Agreement</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Specific terms for automation projects will be outlined in separate service agreements. 
                These terms serve as the general framework for our relationship.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">4. Client Responsibilities</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Provide accurate information about your business processes</li>
                <li>Grant necessary access to systems and data required for automation implementation</li>
                <li>Communicate requirements and feedback in a timely manner</li>
                <li>Ensure compliance with applicable laws and regulations in your industry</li>
                <li>Maintain confidentiality of any proprietary automation solutions we develop</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">5. Our Responsibilities</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Deliver automation solutions according to agreed specifications</li>
                <li>Maintain confidentiality of your business information</li>
                <li>Provide reasonable support during implementation and testing phases</li>
                <li>Ensure solutions meet industry best practices for security and reliability</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">6. Intellectual Property</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Custom automation solutions developed specifically for your business remain your property. 
                General methodologies, frameworks, and non-client-specific improvements remain Aotumate's 
                intellectual property.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">7. Confidentiality</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We maintain strict confidentiality regarding your business processes, data, and any proprietary 
                information shared during our engagement. This obligation continues beyond the termination of services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">8. Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                While we strive for excellence, our liability is limited to the fees paid for the specific 
                service in question. We are not liable for indirect, consequential, or incidental damages.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">9. Termination</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Either party may terminate services with reasonable notice. Upon termination, you retain 
                ownership of your data and any custom solutions developed for your business.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">10. Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                These terms are governed by the laws of the jurisdiction where Aotumate operates. 
                Any disputes will be resolved through good-faith negotiation or mediation.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">11. Changes to Terms</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may update these terms from time to time. Material changes will be communicated to 
                existing clients with reasonable notice.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">12. Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms or our services, please contact us at Riyad@aotumate.com.
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

export default TermsOfService;