import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            Our experts are ready to assist you with inquiries, logistics, and
            strategic trade partnerships.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2 text-gray-800">
              <Mail size={20} />
              <span>trade@lgtglobal.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <Phone size={20} />
              <span>+91 9876 543 210</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <Card className="flex-1 p-6 shadow-lg border-none rounded-xl bg-white">
          <CardContent className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Get in touch
            </h3>

            {/* First & Last Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <Input
                  placeholder="Enter First Name"
                  className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Input
                  placeholder="Enter Last Name"
                  className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mail
              </label>
              <Input
                placeholder="Enter mail"
                className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How can we help?
              </label>
              <Textarea
                placeholder="Type your message"
                className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
              />
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-black text-white hover:bg-gray-900">
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
