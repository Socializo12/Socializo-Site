"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// Basic cn utility function (replaces "@/lib/utils")
// This is a simplified version of the common `cn` function
// For more robust class merging, you'd typically use `clsx` and `tailwind-merge`
function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ")
}

// Custom Button Component (replaces shadcn/ui Button)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" // Add more variants if needed
}

function Button({ className, variant = "default", children, ...props }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  return (
    <button
      className={cn(
        baseStyles,
        variant === "default" && "mobile-cta-button w-[100px] mt-[20px]", // Custom styles for default button
        variant === "outline" && "bg-zinc-900 text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white", // Custom styles for outline button
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}



// FilterTabs Component
interface FilterTabsProps {
  categories: string[]
  onSelectCategory: (category: string) => void
  initialCategory?: string
}

function FilterTabs({ categories, onSelectCategory, initialCategory = "All" }: FilterTabsProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
    onSelectCategory(category)
  }

  return (
    <div className="flex flex-wrap justify-arroun items-center flex-row gap-[5px] p-4 bg-black w-[min-content]">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline" // Using the custom 'outline' variant
          className={cn(
            "mobile-cta-button  my-[10px] transition-colors",
            // The custom Button component already handles these base styles for outline
            // We only need to add the active state specific styles
            activeCategory === category &&
              "bg-green-900 text-green-300 border-green-500 hover:bg-green-800 hover:text-green-200",
          )}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

// BlogPostCard Component
interface BlogPostCardProps {
  post: {
    id: string
    category: string
    date: string
    title: string
    description: string
    imageUrl: string
    link: string
  }
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={post.link} className="block group" prefetch={false}>
      <div className="rounded-lg overflow-hidden bg-zinc-900 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2 text-xs font-medium">
            <span
              className={cn(
                "px-2 py-1 rounded-full",
                post.category === "AI Insights" ? "bg-green-900 text-green-300" : "bg-zinc-800 text-zinc-400",
              )}
            >
              {post.category}
            </span>
            <span className="text-zinc-500">• {post.date}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-zinc-400 text-sm line-clamp-3">{post.description}</p>
        </div>
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-opacity duration-300 group-hover:opacity-80"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h4 className="text-lg font-bold text-white">{post.title}</h4>
          </div>
        </div>
      </div>
    </Link>
  )
}

// Main BlogPage Component
export default function TabContent() {
  const allBlogPosts = [
    {
      id: "1",
      category: "AI Insights",
      date: "11 March 2025",
      title: "Adversarial Training: Key Strategies for AI Security",
      description:
        "Explore adversarial training strategies that enhance AI security, reduce attack success rates, and address industry-specific challenges.",
      imageUrl: "/images/ai-security.png",
      link: "#",
    },
    {
      id: "2",
      category: "AI Insights",
      date: "30 January 2025",
      title: "Understanding LLM Evaluation Metrics",
      description:
        "Learn about the essential metrics like perplexity, BLEU, and ROUGE for evaluating large language models. This blog explores strategies for effective assessment, combining automated metrics with human feedback to ensure high performance and ethical responsibility in AI applications.",
      imageUrl: "/images/llm-metrics.png",
      link: "#",
    },
    {
      id: "3",
      category: "Cybersecurity",
      date: "15 February 2025",
      title: "The Future of Quantum Cryptography",
      description:
        "Dive into the world of quantum cryptography and its implications for future data security. Understand how quantum principles can protect information from advanced cyber threats.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: "4",
      category: "Digital Transformation Case Studies",
      date: "05 March 2025",
      title: "Transforming Retail with AI-Powered Analytics",
      description:
        "A case study on how a major retail chain leveraged AI-powered analytics to optimize inventory, personalize customer experiences, and boost sales.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: "5",
      category: "Web3 Developments",
      date: "22 January 2025",
      title: "Decentralized Finance (DeFi): A Comprehensive Guide",
      description:
        "An in-depth look at Decentralized Finance (DeFi), covering its core concepts, key protocols, and the future of financial services on the blockchain.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: "6",
      category: "Emerging Tech Trends",
      date: "01 April 2025",
      title: "The Rise of Edge Computing in IoT",
      description:
        "Explore how edge computing is revolutionizing the Internet of Things (IoT) by bringing computation and data storage closer to the sources of data, enabling real-time insights and reduced latency.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
  ]

  const categories = [
    "All",
    "AI Insights",
    "Cybersecurity",
    "Digital Transformation Case Cases",
    "Thought Leadership",

  ]

  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts)

  const handleCategorySelect = (category: string) => {
    if (category === "All") {
      setFilteredPosts(allBlogPosts)
    } else {
      setFilteredPosts(allBlogPosts.filter((post) => post.category === category))
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-8">
        <FilterTabs categories={categories} onSelectCategory={handleCategorySelect} initialCategory="All" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
