import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet, Heart, Users, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // TODO: Fetch real data from Lovable Cloud
  const mockDonors = [
    { id: 1, name: "John Smith", bloodType: "O+", phone: "+1 555-0101", status: "Available" },
    { id: 2, name: "Sarah Johnson", bloodType: "A+", phone: "+1 555-0102", status: "Available" },
    { id: 3, name: "Mike Davis", bloodType: "B-", phone: "+1 555-0103", status: "Pending" },
  ];

  const mockRequests = [
    { id: 1, patient: "Emma Wilson", bloodType: "O+", units: 2, urgency: "Critical", hospital: "City General" },
    { id: 2, patient: "Robert Brown", bloodType: "A-", units: 1, urgency: "Urgent", hospital: "Memorial Hospital" },
  ];

  return (
    <div className="min-h-screen bg-subtle-gradient">
      <nav className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Droplet className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">LifeFlow</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage donors and blood requests</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">5 critical</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Donations This Month</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="donors" className="space-y-4">
          <TabsList>
            <TabsTrigger value="donors">Donors</TabsTrigger>
            <TabsTrigger value="requests">Blood Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="donors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Registered Donors</CardTitle>
                <CardDescription>Manage and view all blood donors in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockDonors.map((donor) => (
                    <div key={donor.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Droplet className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{donor.name}</p>
                          <p className="text-sm text-muted-foreground">{donor.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold">{donor.bloodType}</p>
                          <p className="text-sm text-muted-foreground">{donor.status}</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="destructive" size="sm">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Blood Requests</CardTitle>
                <CardDescription>View and manage active blood requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">{request.patient}</p>
                        <p className="text-sm text-muted-foreground">{request.hospital}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold">{request.bloodType} - {request.units} units</p>
                          <p className={`text-sm ${
                            request.urgency === 'Critical' ? 'text-destructive' : 'text-yellow-600'
                          }`}>
                            {request.urgency}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Details</Button>
                        <Button variant="destructive" size="sm">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
