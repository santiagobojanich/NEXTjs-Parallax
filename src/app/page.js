"use client"
import CountDown from '@/components/CountDown/countdownTimer'
import dynamic from 'next/dynamic'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


const DynamicMap = dynamic(() => import('@/components/Map/map'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen text-[50px] flex-col items-center justify-between p-24">
                <CountDown countdownTimestampMs={1702041000000}/>
                
                
    </main>
  )
}
