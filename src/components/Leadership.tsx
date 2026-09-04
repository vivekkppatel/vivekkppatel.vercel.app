interface Activity {
  role: string;
  org: string;
  period: string;
  description: string;
}

const activities: Activity[] = [
  {
    role: "Founding Board Member",
    org: "Phi Gamma Nu",
    period: "Feb 2026 – Present",
    description:
      "Spearheading the launch of a professional business fraternity chapter from the ground up — developing marketing strategies, recruiting members, and establishing the fraternity's presence on campus.",
  },
  {
    role: "Volunteer",
    org: "Chesapeake Animal Services Unit",
    period: "Jun 2026 – Jul 2026",
    description:
      "Provided independent, hands-on care and enrichment for shelter animals — interpreting behavioral cues, safely navigating dynamic outdoor terrain, and maintaining strict adherence to facility safety protocols.",
  },
  {
    role: "Student Athlete",
    org: "Pickleball Club",
    period: "Sep 2024 – Present",
    description:
      "Maintain a structured weekly schedule balancing academics, intensive training, and intercollegiate competition travel.",
  },
];

export function Leadership() {
  return (
    <section
      id="leadership"
      className="py-24 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Leadership &amp; Activities
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-10">
          Building communities on and off campus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={`${activity.role}-${activity.org}`} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
          {activity.org}
        </h3>
        <span className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0">
          {activity.period}
        </span>
      </div>
      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
        {activity.role}
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        {activity.description}
      </p>
    </div>
  );
}
