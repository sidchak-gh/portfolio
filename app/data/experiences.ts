import type * as z from "zod";
import type { experienceSchema } from "../types/zodTypes";
import { colours } from "./colours";

export const professionalExp: z.infer<typeof experienceSchema>[] = [
	{
		date: ["Jan 2026", "Mar 2026"],
		title: "Data Analytics Intern",
		institution: "Quality Software Technologies",
		tagline: "Processing real-world datasets and building automation workflows.",
		description: [
			"Processed and analyzed 10,000+ row real-world datasets using Python (Pandas, NumPy) and Excel, performing data cleaning, outlier detection, feature transformation, and validation across 5+ business domains.",
			"Conducted EDA using correlation matrices and trend visualizations to surface actionable insights; delivered weekly reports driving data-driven decisions across 3 departments, reducing reporting turnaround by 30%.",
			"Built 5+ automated email and notification workflows using n8n, cutting manual workload by 50–70% and improving operational efficiency and team response consistency.",
		],
		experienceBadges: {
			analytics: { label: "Data Analytics", backgroundColour: colours.ai },
			automation: { label: "Automation", backgroundColour: colours.automation },
			python: { label: "Python", backgroundColour: colours.py },
		},
		link: "https://www.qualitysofttech.com/",
	},
];

export const educationExp: z.infer<typeof experienceSchema>[] = [
	{
		date: ["Aug 2023", "Present"],
		title: "B.Tech in Computer Science Engineering",
		institution: "Graphic Era Hill University",
		description: [
			"Coursework covering algorithms, data structures, software engineering, databases, and compiler design.",
		],
		experienceBadges: {
			cs: {
				label: "Computer Science",
				backgroundColour: colours.dataStructures,
			},
			algorithms: { label: "Algorithms", backgroundColour: colours.algorithms },
			swe: { label: "Software Engineering", backgroundColour: colours.swe },
		},
		link: "https://gehu.ac.in/",
	},
];
