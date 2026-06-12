export interface CaseStudyLink {
	label: string;
	href: string;
}

export interface CaseStudySeo {
	title?: string;
	description?: string;
	socialImage?: string;
}

export interface CaseStudySection {
	id: string;
	title: string;
	paragraphs: string[];
}

export interface CaseStudyHighlight {
	label: string;
	value: string;
}

export interface CaseStudyPresentation {
	eyebrow?: string;
	accent?: "gold" | "mist" | "meadow";
	heroLayout?: "balanced" | "immersive";
	highlights?: CaseStudyHighlight[];
	indexLabel?: string;
}

export interface CaseStudy {
	slug: string;
	title: string;
	summary: string;
	projectType: string;
	stack: string[];
	image?: string;
	sections: CaseStudySection[];
	links: CaseStudyLink[];
	publishedAt: string;
	updatedAt: string;
	seo?: CaseStudySeo;
	presentation?: CaseStudyPresentation;
}

// No case studies yet — add them here when ready
export const caseStudies: CaseStudy[] = [];

export function getCaseStudyBySlug(slug: string) {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
