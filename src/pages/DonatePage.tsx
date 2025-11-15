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

const DonatePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement actual donation application logic with Lovable Cloud
    setTimeout(() => {
      toast({
        title: "Application submitted",
        description: "Thank you for your willingness to donate! We'll contact you soon.",
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
              <CardTitle className="text-3xl">Donate Blood</CardTitle>
              <CardDescription>
                Fill out the form below to register as a blood donor. Your contribution can save lives.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required placeholder="John Doe" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input id="age" type="number" required placeholder="25" min="18" max="65" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blood-type">Blood Type *</Label>
                    <Select required>
                      <SelectTrigger id="blood-type">
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
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea id="address" required placeholder="123 Main St, City, State, ZIP" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="last-donation">Last Donation Date (if applicable)</Label>
                  <Input id="last-donation" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medical-conditions">Medical Conditions or Medications</Label>
                  <Textarea 
                    id="medical-conditions" 
                    placeholder="Please list any medical conditions or medications you're currently taking"
                    rows={3}
                  />
                </div>

                <div className="bg-accent p-4 rounded-lg">
                  <h3 className="font-semibold text-accent-foreground mb-2">Donor Requirements:</h3>
                  <ul className="text-sm text-accent-foreground/80 space-y-1">
                    <li>• Be between 18-65 years old</li>
                    <li>• Weigh at least 110 pounds</li>
                    <li>• Be in good general health</li>
                    <li>• Wait at least 56 days between donations</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit Donation Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
