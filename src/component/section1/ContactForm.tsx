"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, User, Building, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"
import "tailwindcss"
import "@/component/style.css"
import "@/component/Contact-Form.css"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-$$$$]/g, ""))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-form-section">
      {/* Enhanced Background Effects */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="morphing-shapes">
        <div className="morph"></div>
        <div className="morph"></div>
      </div>

      <div className="sparkle-container">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="sec1-h4 inline-block mb-6">
            <h4>Get In Touch</h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold my-[10px]">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl text-gray-300 max-w-[660px] mt-[10px] mb-[40px] mx-auto">
            Book a free strategy call or send us a message. We will analyze your current approach and show you exactly how
            to get 50+ qualified leads per month.
          </p>
        </div>

        <section className="section-contact  items-start">
          {/* Contact Information */}
          <div className="gap-[10px] mt-[30px] flex flex-row-reverse flex-wrap justify-center items-center w-full ">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/90 contact-detailsBox rounded-2xl py-[53px] px-[20px] border border-blue-400/20">
              <h3 className="text-2xl font-bold py-[10px] mb-6">Let is Start a Conversation</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 my-[20px]">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full gap-[16px] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  <div className="flex items-center justify-start gap-[10px]">
                    <p className="font-semibold">Call Us</p>
                    <a href="tel:+1 832-304-5611" className="no-underline text-blue-400 text-[white] hover:text-blue-300 transition-colors">
                      +1 832-304-5611
                    </a>
                  </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 my-[20px]">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full gap-[16px] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  <div className="flex items-center justify-start gap-[10px]">
                    <p className="font-semibold">Email Us</p>
                    <a
                      href="mailto:info@socializo.co"
                      className="no-underline text-blue-400 hover:text-blue-300 transition-colors text-[white] line-none"
                    >
                      info@socializo.co
                    </a>
                  </div>
                  </div>
                </div>
                {/* <div className="flex items-center gap-4 my-[20px]">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full gap-[16px] flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-400" />
                  <div className="flex items-center justify-start">
                    <p className="font-semibold">Office</p>
                    <p className="text-gray-300">1309 Coffeen Avenue, Ste 1200</p>
                    <p className="text-gray-300">Sheridan, WY 82801, US</p>
                  </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 contact-detailsBox rounded-2xl p-[20px] border border-blue-400/20">
              <h3 className="text-xl font-bold py-[10px]">What You will Get:</h3>
              <ul className="space-y-3">
                <li className="flex items-center flex-wrap sm:px-[7px] py-[10px]  gap-[6px]">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Free 25-minute strategy session</span>
                </li>
                <li className="flex items-center flex-wrap sm:px-[7px] py-[10px]  gap-[6px]">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Custom lead generation plan</span>
                </li>
                <li className="flex items-center flex-wrap sm:px-[7px] py-[10px]  gap-[6px]">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>ROI projection for your business</span>
                </li>
                <li className="flex items-center flex-wrap sm:px-[7px] py-[10px] gap-[6px]">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>No commitment required</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full bg-gradient-to-br from-gray-900/80 to-black/90 rounded-2xl p-[20px] border border-blue-400/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="form-group py-[15px]">
                  <label htmlFor="name" className="form-label">
                    <User className="w-4 h-4" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${errors.name ? "error" : ""}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group py-[15px]">
                  <label htmlFor="email" className="form-label">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                {/* Phone Field */}
                <div className="form-group py-[15px]">
                  <label htmlFor="phone" className="form-label">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                {/* Company Field */}
                <div className="form-group py-[15px]">
                  <label htmlFor="company" className="form-label">
                    <Building className="w-4 h-4" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`form-input ${errors.company ? "error" : ""}`}
                    placeholder="Enter your company name"
                  />
                  {errors.company && <span className="form-error">{errors.company}</span>}
                </div>

                {/* Message Field */}
                <div className="form-group py-[15px]">
                  <label htmlFor="message" className="form-label">
                    <MessageSquare className="w-4 h-4" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`form-input resize-none ${errors.message ? "error" : ""}`}
                    placeholder="Tell us about your business and lead generation goals..."
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className= {`form-submit-btn ${isSubmitting ? "submitting" : ""} "w-[min-content]"` }
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="success-message">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We will get back to you within 24 hours.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="error-message">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again or contact us directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-[7px]">Trusted by 500+ B2B Companies Worldwide</p>
          <div className="flex justify-center items-center gap-[16px] flex-wrap opacity-60">
            <div className="flex items-center ">
              <div className="text-2xl font-bold text-blue-400">24hr</div>
              <div className="text-sm">ResponseTime</div>
            </div>
            <div className="w-px h-8 bg-gray-600 hidden sm:block"></div>
            <div className="flex items-center ">
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-8 bg-gray-600 hidden sm:block"></div>
            <div className="flex items-center ">
              <div className="text-2xl font-bold text-blue-400">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
