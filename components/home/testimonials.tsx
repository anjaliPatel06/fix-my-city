"use client"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Resident, Mumbai",
      content: "Fix My City made reporting the pothole near my house incredibly easy. Fixed within a week!",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Community Leader, Delhi",
      content: "The voice reporting feature is fantastic. Perfect for those who prefer speaking over typing.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Civic Official, Bangalore",
      content: "The AI categorization saves our team hours. Issues are prioritized automatically.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-xl p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
