import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Heart, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-blood-donation.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-subtle-gradient">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">LifeFlow</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Save Lives Through
                <span className="text-primary block">Blood Donation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect donors with those in need. Every donation can save up to three lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button size="lg" className="text-lg px-8">
                    Donate Blood
                  </Button>
                </Link>
                <Link to="/request">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Request Blood
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Blood donation hero" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-primary-foreground/80">Active Donors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25K+</div>
              <div className="text-primary-foreground/80">Lives Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Partner Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to make a difference</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Create your account and complete your donor profile with medical information
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Donate or Request</CardTitle>
                <CardDescription>
                  Apply to donate blood or request blood for someone in need
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Save Lives</CardTitle>
                <CardDescription>
                  Get matched with recipients or donors and help save precious lives
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-accent-foreground">Ready to Make a Difference?</h2>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of donors who have already saved lives. Your blood donation can be someone's second chance.
          </p>
          <Link to="/auth">
            <Button size="lg" className="text-lg px-8">
              Join Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Droplet className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LifeFlow</span>
          </div>
          <p className="text-muted-foreground">© 2024 LifeFlow. Saving lives, one donation at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
