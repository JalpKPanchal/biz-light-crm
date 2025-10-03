import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  type: "lead" | "client" | "task" | "note";
}

const activities: Activity[] = [
  {
    id: "1",
    user: "John Doe",
    action: "created a new lead",
    target: "Acme Corp",
    time: "2 hours ago",
    type: "lead",
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "completed task",
    target: "Follow up with Tech Solutions",
    time: "3 hours ago",
    type: "task",
  },
  {
    id: "3",
    user: "Mike Johnson",
    action: "converted lead to client",
    target: "StartupXYZ",
    time: "5 hours ago",
    type: "client",
  },
  {
    id: "4",
    user: "Sarah Williams",
    action: "added a note to",
    target: "Global Industries",
    time: "1 day ago",
    type: "note",
  },
  {
    id: "5",
    user: "Tom Brown",
    action: "updated lead status",
    target: "Enterprise Co",
    time: "1 day ago",
    type: "lead",
  },
];

const typeColors = {
  lead: "bg-primary",
  client: "bg-secondary",
  task: "bg-accent",
  note: "bg-muted-foreground",
};

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex gap-4">
              <div className="relative">
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarFallback className={cn(typeColors[activity.type], "text-white text-xs")}>
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {index < activities.length - 1 && (
                  <div className="absolute left-5 top-10 h-6 w-px bg-border" />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
