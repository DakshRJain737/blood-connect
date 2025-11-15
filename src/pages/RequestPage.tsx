import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Droplet, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const RequestPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement actual blood request logic with Lovable Cloud
    setTimeout(() => {
      toast({
        title: "Request submitted",
        description: "Your blood request has been submitted. We'll connect you with donors soon.",
      });
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-subtle-gradient">
      <nav className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Droplet className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">LifeFlow</span>
          </Link>
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Request Blood</CardTitle>
              <CardDescription>
                Submit a blood request for yourself or someone in need. We'll help you find donors quickly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="patient-name">Patient Name *</Label>
                  <Input id="patient-name" required placeholder="John Doe" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-age">Patient Age *</Label>
                    <Input id="patient-age" type="number" required placeholder="25" min="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blood-type-needed">Blood Type Needed *</Label>
                    <Select required>
                      <SelectTrigger id="blood-type-needed">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="units-needed">Units Needed *</Label>
                  <Input id="units-needed" type="number" required placeholder="2" min="1" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hospital">Hospital Name *</Label>
                  <Input id="hospital" required placeholder="City General Hospital" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hospital-address">Hospital Address *</Label>
                  <Textarea id="hospital-address" required placeholder="123 Medical Center Dr, City, State, ZIP" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level *</Label>
                  <Select required>
                    <SelectTrigger id="urgency">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical (within 24 hours)</SelectItem>
                      <SelectItem value="urgent">Urgent (1-3 days)</SelectItem>
                      <SelectItem value="moderate">Moderate (within a week)</SelectItem>
                      <SelectItem value="routine">Routine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-name">Contact Person Name *</Label>
                  <Input id="contact-name" required placeholder="Jane Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Contact Phone Number *</Label>
                  <Input id="contact-phone" type="tel" required placeholder="+1 (555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email *</Label>
                  <Input id="contact-email" type="email" required placeholder="contact@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Request *</Label>
                  <Textarea 
                    id="reason" 
                    required
                    placeholder="Please describe the medical situation requiring blood donation"
                    rows={4}
                  />
                </div>

                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-foreground">
                    <strong>Note:</strong> Your request will be visible to registered donors. We'll notify donors matching your requirements immediately.
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit Blood Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
