
import Feature from "@/components/Feature"
import HT from "@/components/HT"
import Project from "@/components/Project"
import { projects } from "@/public/data/all"
import Btn from "@/components/Btn"


export default function ProjectsPage () {
  return (
    <div className="pad bg-light/25 dark:bg-dark/55">
      <HT value='مشاريعنا :' />
      <p className="w-[fit-content] px-8 py-2 font-bold rounded-b-[10px] rounded-l-[10px] bg-light dark:bg-dark/70">جميع المشاريع التي قمنا بها سابقا :</p>
      <div className="flex flex-row p-8 md:px-0 justify-around md:justify-center flex-wrap items-start">
        {
          projects.map((project)=>
            <Project title={project.title} disc={project.disc} url={project.url} type={project.type} key={project.url}/>
          )
        }
      </div>
    </div>
  )
}
