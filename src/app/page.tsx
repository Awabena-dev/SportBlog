'use client';
import Hero from "@/section/Hero/Hero";
import TodayNews from "@/section/TodayBlock/TodayNews";
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const [playerHeight, setplayerHeight] = useState<number>(0)


  return (
    <main>
      <Hero setplayerHeight={setplayerHeight} />
      <TodayNews playerHeight={playerHeight} />
    </main>
  )
}