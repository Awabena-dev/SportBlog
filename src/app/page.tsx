'use client';
import ShortInfo from "@/components/ShortInfo";
import Category from "@/section/Category/Category";
import FootballNews from "@/section/FootBallNews/FootballNews";
import Hero from "@/section/Hero/Hero";
import RecentNews from "@/section/Recent_News/RecentNews";
import TodayNews from "@/section/TodayBlock/TodayNews";
import TrendingNews from "@/section/Trending News/TrendingNews";
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const [playerHeight, setplayerHeight] = useState<number>(0)


  return (
    <main>
      <Hero setplayerHeight={setplayerHeight} />
      <TodayNews playerHeight={playerHeight} />
      <Category />
      <TrendingNews />
      <FootballNews />
      <RecentNews />
    </main>
  )
}