"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormType } from "../validations/contactSchema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange", // 👈 important for instant validation
  });

  const { toast } = useToast();

  const onSubmit = async (data: ContactFormType) => {
    console.log("Form Submit Succesfully", data);
    toast({
      title: "Success!",
      description: "Message sent successfully.",
    });
    reset();
    // try {
    //   const result = await emailjs.send(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     {
    //       ...data,
    //     },
    //     "YOUR_USER_ID"
    //   );
    //   alert("Message sent successfully");
    //   reset();
    // } catch (error) {
    //   alert("Failed to send message");
    //   console.error(error);
    // }
  };

  return (
    <div className="w-full md:min-h-screen flex items-center justify-center ">
      <div className=" container mx-auto flex flex-col py-10 px-6 md:px-24 md:flex-row justify-center gap-12 md:gap-24">
        {/* Left Section */}
        <div className="flex-1 md:max-w-[500px] text-center md:text-left">
          <h2 className="text-[24px] md:text-[40px] font-titillium font-bold text-[#333333]">
            Contact Us
          </h2>
          <p className="mt-4 text-[#777777] text-[14px] md:text-[20px] font-semibold">
            Our experts are ready to assist you with inquiries, logistics, and
            strategic trade partnerships.
          </p>
          <div className="mt-6 flex lg:flex-col justify-between lg:space-y-4 ">
            <div className="flex items-center gap-x-2 text-[#333333]">
              <Mail size={20} />
              <span className="text-[16px] md:text-[20px] font-semibold break-words">
                trade@lgtglobal.com
              </span>
            </div>
            <div className="flex items-center gap-x-2 text-[#333333]">
              <Phone size={20} />
              <span className="text-[16px] md:text-[20px] font-semibold break-words">
                +91 9876 543 210
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <Card className="flex-1 p-6 shadow-lg border-none rounded-xl bg-white md:max-w-[600px]">
          <CardContent className="space-y-4">
            <h3 className="text-2xl font-titillium font-bold text-gray-800">
              Get in touch
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input
                    {...register("firstName")}
                    placeholder="Enter First Name"
                    className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input
                    {...register("lastName")}
                    placeholder="Enter Last Name"
                    className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Company & Product Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <Input
                    {...register("companyName")}
                    placeholder="Enter Company Name"
                    className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Information
                  </label>
                  <Input
                    {...register("productInfo")}
                    placeholder="Product Info"
                    className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  {...register("email")}
                  placeholder="Enter email"
                  className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone no.
                </label>
                <Input
                  {...register("phone")}
                  placeholder="+91"
                  className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  How can we help?
                </label>
                <Textarea
                  {...register("message")}
                  placeholder="Type your message"
                  className="mt-1 rounded-xl shadow-sm border-solid border-gray-200"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#333333] text-white hover:bg-gray-600"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
