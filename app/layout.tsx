import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import {
	absoluteUrl,
	BASE_URL,
	DEFAULT_DESCRIPTION,
	DEFAULT_SOCIAL_IMAGE,
	DEFAULT_SOCIAL_IMAGE_ALT,
	DEFAULT_TITLE,
	SITE_NAME,
	siteVerification,
} from "@/lib/seo";
import CommandPaletteProvider from "@/components/shared/CommandPaletteProvider";
import "./globals.scss";

const HOME_KEYWORDS = [
	"Siddharth Chakraborty",
	"CS student developer India",
	"Python developer",
	"full stack developer",
	"React Node.js projects",
	"AI ML developer",
	"Graphic Era Hill University",
];

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: DEFAULT_TITLE,
	description: DEFAULT_DESCRIPTION,
	applicationName: SITE_NAME,
	authors: [{ name: SITE_NAME, url: BASE_URL }],
	creator: SITE_NAME,
	publisher: SITE_NAME,
	keywords: HOME_KEYWORDS,
	alternates: {
		canonical: absoluteUrl("/"),
	},
	verification: siteVerification,
	icons: {
		icon: "/favicon.ico",
	},
	manifest: "/manifest.json",
	openGraph: {
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		url: BASE_URL,
		siteName: SITE_NAME,
		locale: "en_CA",
		type: "website",
		images: [
			{
				url: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
				width: 1200,
				height: 630,
				alt: DEFAULT_SOCIAL_IMAGE_ALT,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION,
		images: [absoluteUrl(DEFAULT_SOCIAL_IMAGE)],
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#111" },
		{ media: "(prefers-color-scheme: light)", color: "#f4f4f7" },
	],
};

const COLOR_MODE_BOOTSTRAP = `(() => {
  try {
    const stored = window.localStorage.getItem('portfolio:color-mode');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const mode = stored === 'light' || stored === 'dark' ? stored : (prefersLight ? 'light' : 'dark');
    document.documentElement.setAttribute('data-mode', mode);
    document.documentElement.style.colorScheme = mode;
    if (mode === 'light') document.documentElement.style.backgroundColor = '#f4f4f7';
  } catch (_) {
    document.documentElement.setAttribute('data-mode', 'light');
  }
})();`;

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${BASE_URL}#person`,
			name: "Siddharth Chakraborty",
			description: DEFAULT_DESCRIPTION,
			url: BASE_URL,
			image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
			sameAs: [
				"https://github.com/sidchak-gh",
				"https://linkedin.com/in/sidchak",
			],
			jobTitle: "CS Student & Software Developer",
			homeLocation: {
				"@type": "Country",
				name: "India",
			},
			alumniOf: [
				{
					"@type": "CollegeOrUniversity",
					name: "Graphic Era Hill University",
					url: "https://gehu.ac.in/",
				},
			],
			knowsAbout: [
				"Full Stack Development",
				"Python",
				"JavaScript",
				"React",
				"Node.js",
				"Machine Learning",
				"Computer Vision",
				"Data Analytics",
				"AI systems",
				"PostgreSQL",
				"Docker",
				"Automation",
			],
		},
		{
			"@type": "WebSite",
			"@id": `${BASE_URL}#website`,
			url: BASE_URL,
			name: SITE_NAME,
			description: DEFAULT_DESCRIPTION,
			inLanguage: "en-CA",
			publisher: {
				"@id": `${BASE_URL}#person`,
			},
		},
	],
};

export default function RootLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<html
			lang="en-CA"
			data-theme="mono"
			data-mode="light"
			suppressHydrationWarning
		>
			<head>
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: static bootstrap to prevent FOUC, no user input
					dangerouslySetInnerHTML={{ __html: COLOR_MODE_BOOTSTRAP }}
				/>
				{process.env.NODE_ENV === "development" && (
					<Script
						src="//unpkg.com/react-grab/dist/index.global.js"
						crossOrigin="anonymous"
						strategy="beforeInteractive"
					/>
				)}
				{process.env.NODE_ENV === "development" && (
					<Script
						src="//unpkg.com/@react-grab/mcp/dist/client.global.js"
						strategy="lazyOnload"
					/>
				)}
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, no user input
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="theme-mono">
				<CommandPaletteProvider />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
