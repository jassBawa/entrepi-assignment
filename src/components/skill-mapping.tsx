import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Skill {
  id: number
  name: string
  xp: number
  level: number
  nextLevelXp: number
}

const dummySkills: Skill[] = [
  { id: 1, name: "Mathematics", xp: 750, level: 3, nextLevelXp: 1000 },
  { id: 2, name: "Physics", xp: 500, level: 2, nextLevelXp: 750 },
  { id: 3, name: "Computer Science", xp: 1200, level: 4, nextLevelXp: 1500 },
  { id: 4, name: "Logic", xp: 300, level: 1, nextLevelXp: 500 },
]

export function SkillMapping() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Skill Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {dummySkills.map((skill) => {
            const progress = (skill.xp / skill.nextLevelXp) * 100
            return (
              <div key={skill.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Level {skill.level}
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{skill.xp} XP</span>
                  <span>{skill.nextLevelXp} XP to next level</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
} 