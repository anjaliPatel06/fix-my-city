"use client"
import { MapPin, Calendar, AlertCircle, ImageIcon } from "lucide-react"

export function ComplaintDetails({ complaint }: { complaint: any }) {
  return (
    <div className="space-y-6">
      {/* Photo */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <ImageIcon className="w-5 h-5" />
          Complaint Photo
        </h3>
        <img
          src={complaint.photoUrl || "/placeholder.svg"}
          alt="Complaint"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="bg-card rounded-xl p-6 border border-border space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">Category</p>
          <p className="font-semibold">{complaint.category}</p>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location
          </p>
          <p className="font-semibold">{complaint.location}</p>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Description
          </p>
          <p className="text-foreground leading-relaxed">{complaint.description}</p>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Urgency Level
          </p>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              complaint.urgency === "High"
                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                : complaint.urgency === "Medium"
                  ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200"
                  : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
            }`}
          >
            {complaint.urgency}
          </span>
        </div>
      </div>
    </div>
  )
}
