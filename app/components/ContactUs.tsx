"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";
import { toast } from "sonner";
import ProductMultiSelect from "./ProductMultiSelect";
import { ContactFormType, contactSchema } from "../data/contactSchema";

export default function ContactUs() {
  const methods = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phone: "",
      message: "",
      interestedProducts: [],
    },
    mode: "onChange", // for instant validation
  });
  const errorClass = "text-red-500 text-sm mt-1";
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = methods;

  const onSubmit = async (data: ContactFormType) => {
    console.log("Form Submit Succesfully", data);
    console.log("Selected products:", data.interestedProducts);
    toast.success("Form Submitted Successfully");
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
    //  toast.error('Message Failed')
    //   console.error(error);
    // }
  };

  return (
    <div className="w-full md:min-h-screen flex items-center justify-center ">
      <div className=" container mx-auto flex flex-col py-10 px-6 md:px-24 lg:flex-row justify-center gap-12 md:gap-24">
        {/* Left Section */}
        <div className="flex-1 md:max-w-[500px] text-center md:text-left">
          <h2 className="text-[24px] md:text-[40px] font-titillium font-bold text-[#333333]">
            Contact Us
          </h2>
          <p className="mt-4 text-[#777777] text-[14px] md:text-[20px] font-semibold">
            Our experts are ready to assist you with inquiries, logistics, and
            strategic trade partnerships.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-y-2 lg:flex-col lg:space-y-4">
            <div className="flex items-center gap-x-2 text-[#333333] cursor-pointer whitespace-nowrap">
              <Mail size={20} />
              <a
                href="mailto:trade@lgtglobal.com"
                className="text-[16px] md:text-[20px] font-semibold break-words"
              >
                trade@lgtglobal.com
              </a>
            </div>
            <div className="flex items-center gap-x-2 text-[#333333] cursor-pointer whitespace-nowrap">
              <Phone size={20} />
              <a
                href="tel:919876543210"
                className="text-[16px] md:text-[20px] font-semibold break-words"
              >
                +91 9876 543 210
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <Card className="flex-1 shadow-lg border-none rounded-xl bg-white md:max-w-[600px]">
          <CardContent className="p-6 pt-6 space-y-4">
            <h3 className="text-2xl font-titillium font-bold text-gray-800">
              Get in touch
            </h3>
            <FormProvider {...methods}>
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
                      className="mt-1 rounded-xl shadow-sm border-solid border-gray-200 font-semibold text-[#777777]"
                    />
                    {errors.firstName && (
                      <p className={errorClass}>{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input
                      {...register("lastName")}
                      placeholder="Enter Last Name"
                      className="mt-1 rounded-xl shadow-sm border-solid border-gray-200 font-semibold text-[#777777] "
                    />
                    {errors.lastName && (
                      <p className={errorClass}>{errors.lastName.message}</p>
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
                      className="mt-1 rounded-xl shadow-sm border-solid border-gray-200 font-semibold text-[#777777]"
                    />
                    {errors.companyName && (
                      <p className={errorClass}>{errors.companyName.message}</p>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Products of Interest
                      </label>
                      <span className="text-[#00AAEE] font-semibold font-nunito text-[14px]">
                        (optional)
                      </span>
                    </div>
                    <ProductMultiSelect />
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
                    className="mt-1 rounded-xl shadow-sm border-solid border-gray-200 font-semibold text-[#777777]"
                  />
                  {errors.email && (
                    <p className={errorClass}>{errors.email.message}</p>
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
                    className="mt-1 rounded-xl shadow-sm border-solid border-gray-200 font-semibold text-[#777777]"
                  />
                  {errors.phone && (
                    <p className={errorClass}>{errors.phone.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center space-x-1">
                    <label className="block text-sm font-medium text-gray-700">
                      How can we help?
                    </label>
                    <span className="text-[#00AAEE] font-semibold font-nunito text-[14px]">
                      (optional)
                    </span>
                  </div>
                  <Textarea
                    {...register("message")}
                    placeholder="Type your message"
                    className="mt-1 rounded-xl shadow-sm border-solid border-gray-200 font-semibold text-[#777777]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#333333] text-white rounded-[8px] hover:bg-gray-600 disabled:opacity-75 disabled:cursor-not-allowed"
                  disabled={!isValid}
                >
                  Submit
                </Button>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
