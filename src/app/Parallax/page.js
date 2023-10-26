"use client"

import CountdownTimer from "@/components/CountDown/countdownTimer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import('@/components/Map/map'), {
      ssr: false,
    });
    

export default function Home() { 
      return (
        <div className="bg-black">
                 <Parallax  className="bg-pink-400" pages={2}>
                     <ParallaxLayer offset={0} speed={-1}>
                        <div className="min-h-screen flex items-center justify-center bg-blue-400 text-white text-[40px] flex-col">
                              <CountdownTimer countdownTimestampMs={1702041000000} /> 
                              <DynamicMap/>
                        </div>
                     </ParallaxLayer>
                      
                     <ParallaxLayer offset={1} className="bg-pink-400" speed={0}>
                        <div className="bg-pink-400 min-h-screen border-2 flex  items-center justify-center flex-col">

                           <h2 className="flex items-center justify-center  text-white text-[40px]">WHOAAA</h2>

                          <div className="w-[40%] h-[20vh] border-2 border-black bg-white">
                                <h1>HOLA</h1>
                          </div> 

                        </div>
                        
                     </ParallaxLayer>
                    
                 </Parallax>

        </div> 
      )
}
