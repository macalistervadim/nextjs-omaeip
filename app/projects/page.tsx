import Link from "next/link";

const projects = [ 
    { id: "p1", title: "Project One" }, 
    { id: "p2", title: "Project Two" }, 
    { id: "p3", title: "Project Three" }, 
]; 

export default function ProjectsAllPage() {
    return ( 
        <div> 
          <h1>Projects</h1> 
          <ul> 
            {projects.map((project) => ( 
              <li key={project.title}> 
                <Link href={`/projects/${project.id}`}>{project.id}</Link> 
              </li> 
            ))} 
          </ul> 
        </div> 
      ); 
}