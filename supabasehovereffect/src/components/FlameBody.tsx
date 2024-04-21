import { CheckIcon, CircleStackIcon } from "@heroicons/react/24/outline"
import Flame from "./Flame"
import { useRef, useState } from "react"


const FlameBody = () => {
    const cardRef = useRef<HTMLElement>(null)
    const[cursor, setCursor] = useState({x:0, y:0})
    const[mouseOnCard, setMouseOnCard] = useState(false)
  
    const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if(cardRef != null){
        const rect = cardRef.current?.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        setCursor({x : x, y : y})
      }
    }
  
    return(
      <main className="w-full h-screen flex place-items-center justify-center">
        <section 
          className="card" 
          ref={cardRef}
          onMouseMove={event => handleMouseMove(event)}
          onMouseEnter={() => setMouseOnCard(true)}
          onMouseLeave={()=>setMouseOnCard(false)}
        >
          <div className="flex flex-col w-2/5 justify-between">
            <div className="flex flex-col gap-5">
              <CircleStackIcon className="w-14 rounded-lg bg-neutral-950/70 stroke-emerald-500 p-2 shadow-inner"/>
              <h1 className="font-poppins text-neutral-200 tracking-wide text-2xl">
                Database
              </h1>
              <p className="-mt-2 font-poppins text-neutral-500 tracking-wide">
                Every project is a full Postgres database, the world's most trusted relational database.
              </p>
            </div>
            <div className="flex flex-col font-poppins text-neutral-200 tracking-wide">
              <span className="flex flex-row gap-2">
                <CheckIcon className="w-5"/>
                <p>100% portable</p>
              </span>
              <span className="flex flex-row gap-2">
                <CheckIcon className="w-5"/>
                <p>Build-in Auth with RLS</p>
              </span>
              <span className="flex flex-row gap-2">
                <CheckIcon className="w-5"/>
                <p>Easy to extand</p>
              </span>
            </div>
          </div>
          <div className="w-3/5">
            <Flame 
              cursor={cursor}
              cardRef={cardRef}
              mouseOnCard={mouseOnCard}
  
            />
          </div>
        </section>
      </main>
    )
}

export default FlameBody