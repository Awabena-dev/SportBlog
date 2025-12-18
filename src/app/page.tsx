'use client';
import ShortInfo from "@/components/ShortInfo";
import Category from "@/section/HomePage/Category/Category";
import FootballNews from "@/section/HomePage/FootBallNews/FootballNews";
import Hero from "@/section/HomePage/Hero/Hero";
import RecentNews from "@/section/HomePage/Recent_News/RecentNews";
import SportArticles from "@/section/HomePage/SportArticles/SportArticles";
import SubscribeSection from "@/section/HomePage/SubscribeSection/SubscribeSection";
import TodayNews from "@/section/HomePage/TodayBlock/TodayNews";
import TrendingNews from "@/section/HomePage/Trending News/TrendingNews";
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
      <SportArticles />
      <SubscribeSection />
    </main>
  )
}