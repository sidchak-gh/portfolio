import type * as z from "zod";
import type { projectSchema } from "../types/zodTypes";
import { colours } from "./colours";

export const projects: z.infer<typeof projectSchema>[] = [
	{
		year: 2025,
		title: "UniThrift",
		description:
			"Full-stack P2P campus marketplace with real-time chat, TF-IDF recommendations, and admin moderation dashboard.",
		languages: {
			react: { name: "React 19", backgroundColour: colours.ts },
			node: { name: "Node.js", backgroundColour: colours.swe },
			postgres: { name: "PostgreSQL", backgroundColour: colours.postgresql },
			socketio: { name: "Socket.io", backgroundColour: colours.automation },
			redux: { name: "Redux Toolkit", backgroundColour: colours.ai },
		},
		links: [
			{ label: "github", href: "https://github.com/sidchak-gh/unithrift" },
		],
	},
	{
		year: 2026,
		title: "SpeedLens",
		description:
			"Real-time traffic analysis pipeline using YOLOv8x + ByteTrack detecting 4 vehicle types at 30+ FPS with TensorRT-accelerated inference.",
		languages: {
			py: { name: "Python", backgroundColour: colours.py },
			yolo: { name: "YOLOv8x", backgroundColour: colours.ai },
			pytorch: { name: "PyTorch", backgroundColour: colours.ml },
			cv: { name: "Computer Vision", backgroundColour: colours.cv },
			tensorrt: { name: "TensorRT", backgroundColour: colours.rnd },
		},
		links: [
			{ label: "github", href: "https://github.com/sidchak-gh/speedlens" },
		],
	},
	{
		year: 2025,
		title: "AI Web Scraper",
		description:
			"Full-stack scraper combining Playwright headless browser automation with Gemini 2.5 Flash, returning structured JSON from any URL.",
		languages: {
			nextjs: { name: "Next.js", backgroundColour: colours.ts },
			flask: { name: "Flask", backgroundColour: colours.py },
			gemini: { name: "Gemini API", backgroundColour: colours.ai },
			playwright: { name: "Playwright", backgroundColour: colours.automation },
		},
		links: [
			{
				label: "github",
				href: "https://github.com/sidchak-gh/AI-Web-Scaper",
			},
		],
	},
	{
		year: 2026,
		title: "Que-Bot",
		description:
			"ML-based MCQ generator and quiz platform that creates exam questions automatically from study materials with score tracking.",
		languages: {
			py: { name: "Python", backgroundColour: colours.py },
			ml: { name: "Machine Learning", backgroundColour: colours.ml },
			flask: { name: "Flask", backgroundColour: colours.automation },
		},
		links: [
			{ label: "github", href: "https://github.com/sidchak-gh/Que-bot" },
		],
	},
	{
		year: 2026,
		title: "C to Pseudo-Code Compiler",
		description:
			"Mini-compiler translating C source code to human-readable pseudo-code with flowchart visualization via a 6-phase pipeline.",
		languages: {
			py: { name: "Python", backgroundColour: colours.py },
			compiler: { name: "Compiler Design", backgroundColour: colours.dataStructures },
			ast: { name: "AST", backgroundColour: colours.algorithms },
		},
		links: [
			{
				label: "github",
				href: "https://github.com/sidchak-gh/C-to-PsuedoCode",
			},
		],
	},
];
