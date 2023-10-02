import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {
	// const btnRef = useRef(null);
	// const isBtnInView = useInView(btnRef, { once: true });

	// const { data, error } = useSWR(url, fetcher);
	// const projects = data?.result;

	// if (error && !data) {
	// 	return null;
	// }

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<h2>
					
				</h2>
				 <HeadingDivider title="My Project" /> 
				<div className="h-10 md:h-14" /> 
				

			 <div className=" grid grid-cols-2  items-center gap-8 md:gap-14">
					<div>
<div className="    bg-[#2D2C3B] rounded-lg overflow-hidden p-12  shadow-2xl">

<div className=" bg-black">

<img src="../s.png" />


</div>
<h3 className=" text-green-500 text-center  font-bold text-2xl mt-10  ">E-Commerece</h3>
<div className=" flex justify-center my-10">

<div className=" flex gap-4 ">
<span className=" bg-[#484A59] p-2 rounded-lg">Next</span>
<span className=" bg-[#484A59] p-2 rounded-lg">React</span>
<span className=" bg-[#484A59] p-2 rounded-lg">Redux</span>
<span className=" bg-[#484A59] p-2 rounded-lg">Tailwind </span>

</div>
</div>
<div className=" flex justify-between items-center ">
{/* <button className="  border-[2px] border-green-500  text-green-500  px-2 py-2 w-full">Detail</button> */}

<div className=" flex justify-c w-full"> <Link href={'https://www.salesberry.com.np/'}><button className="  border-[2px] border-green-500  text-green-500  rounded-lg  px-4 py-2 w-full"> Live Preview</button></Link></div>

</div>

</div>
{/* <div className="   rounded-lg  p-4 bg-white">

<div className=" bg-black">

<img src="../s.png"/>


</div>




</div> */}



					</div>
					{/* <Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>

					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<button aria-label="See more projects" className="">More projects</button>
					</Link> */}
				</div> 
			</section>
		</LazyMotion>
	);
}
