"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"
import "tailwindcss"
import "@/component/style.css"
import "@/component/Contact-Form.css"

interface FormData {
  name: string
  email: string
  phone: string
//   company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
//   company?: string
  message?: string
}


const Contact = () => {
     const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        // company: "",
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
        // if (!formData.company.trim()) {
        //   newErrors.company = "Company name is required"
        // }
    
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
            // company: "",
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
       <section id="faq" className="section4-container4 ">
        <div className="socail-contact"></div>
         {/* Contact Form */}
          <div className="w-full bg-gradient-to-br from-gray-900/80 to-black/90 rounded-2xl p-[20px] border border-blue-400/20 relative overflow-hidden">
            <h2 className="text-[white]  sm:text-4xl md:text-5xl lg:text-[64px] text-3xl text-center">Get Free Consultancy</h2>
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
                {/* <div className="form-group py-[15px]">
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
                </div> */}

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
                  className={`form-submit-btn ${isSubmitting ? "submitting" : ""}`}
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
  )
}

export default Contact