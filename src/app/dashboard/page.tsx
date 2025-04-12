"use client";

import { Leaderboard } from "@/components/leaderboard";
import { ReflectiveQuestions } from "@/components/reflective-questions";
import { SkillMapping } from "@/components/skill-mapping";
import { Streak as StreakComponent } from "@/components/streak";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [lastActiveOn, setLastActiveOn] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch the current streak from our backend API on component mount
  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const response = await fetch("/api/streak");
        if (!response.ok) {
          throw new Error("Failed to fetch streak data");
        }
        const data = await response.json();
        setCurrentStreak(data.currentCount);
        setLastActiveOn(data.lastActiveOn ? new Date(data.lastActiveOn) : null);
      } catch (error) {
        console.error("Error fetching streak data:", error);
        setError("Failed to load streak data");
      }
    };

    fetchStreak();
  }, []);

  // Function to mark today's activity
  const handleCompleteToday = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/streak", {
        method: "POST",
      });
      
      if (!response.ok) {
        throw new Error("Failed to update streak");
      }
      
      const data = await response.json();
      setCurrentStreak(data.currentCount);
      setLastActiveOn(new Date());
    } catch (error) {
      console.error("Error updating streak:", error);
      setError("Failed to update streak");
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <StreakComponent 
            currentStreak={currentStreak} 
            lastActiveOn={lastActiveOn}
            onCompleteToday={handleCompleteToday}
            loading={loading}
          />
          <SkillMapping />
        </div>
        <div className="space-y-6">
          <Leaderboard />
          <ReflectiveQuestions />
        </div>
      </div>
    </div>
  );
}
