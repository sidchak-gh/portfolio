import { Accordion } from "@base-ui/react/accordion";
import type * as z from "zod";
import type { projectSchema } from "@/types/zodTypes";
import { projects } from "../../../data/projects";
import { preventToggleWhileSelecting } from "../../../utils/triggerSelection";
import ProjectDetail from "./ProjectDetail";

const ProjectList = () => {
	return (
		<section
			aria-labelledby="projects-heading"
			className="section-block section-block--projects section-block--editorial"
		>
			<div className="section-heading">
				<h2
					id="projects-heading"
					className="section-title section-title--compact"
				>
					Projects
				</h2>
			</div>
			<Accordion.Root
				multiple
				className="section-list section-list--compact section-list--projects"
				aria-label="Projects"
			>
				{projects.map((project: z.infer<typeof projectSchema>) => {
					const stack = Object.values(project.languages);

					return (
						<Accordion.Item
							key={project.title}
							value={project.title}
							className="section-list__item"
						>
							<Accordion.Header>
								<Accordion.Trigger
									className="section-list__trigger section-list__trigger--compact"
									onClick={preventToggleWhileSelecting}
								>
									<div className="section-list__row section-list__row--project">
										<span className="section-list__date-inline section-list__year">{project.year}</span>
										<span className="section-list__role-inline">
											<strong className="section-list__project-name">{project.title}</strong>
										</span>
										<span className="section-list__badges-inline">
											{stack.map((lang) => (
												<span
													key={lang.name}
													className="badge-pill"
													style={{ backgroundColor: lang.backgroundColour }}
												>
													{lang.name}
												</span>
											))}
										</span>
									</div>
								</Accordion.Trigger>
							</Accordion.Header>
							<Accordion.Panel className="detail-panel" keepMounted>
								<div className="detail-panel__inner">
									<div className="detail-panel__content">
										<p className="detail-panel__description-item detail-panel__description-item--plain">
											{project.description}
										</p>
										<ProjectDetail
											projectTitle={project.title}
											links={project.links}
											caseStudySlug={project.caseStudySlug}
											stack={stack}
											year={project.year}
										/>
									</div>
								</div>
							</Accordion.Panel>
						</Accordion.Item>
					);
				})}
			</Accordion.Root>
		</section>
	);
};

export default ProjectList;
