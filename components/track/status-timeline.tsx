"use client"
import { Check } from "lucide-react"

export function StatusTimeline({ timeline }: { timeline: any[] }) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <h3 className="font-semibold mb-6">Status Timeline</h3>

      <div className="space-y-6">
        {timeline.map((item, index) => (
          <div key={index} className="flex gap-4">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  item.completed
                    ? "bg-green-500 text-white"
                    : index === timeline.findIndex((t: any) => !t.completed)
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {item.completed ? <Check className="w-5 h-5" /> : <div className="w-2 h-2 rounded-full bg-current" />}
              </div>

              {/* Timeline line */}
              {index < timeline.length - 1 && (
                <div className={`w-0.5 h-12 ${item.completed ? "bg-green-500" : "bg-border"}`} />
              )}
            </div>

            {/* Content */}
            <div className="pt-1 pb-4">
              <p className="font-semibold">{item.status}</p>
              <p
                className={`text-sm ${item.completed ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
              >
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
