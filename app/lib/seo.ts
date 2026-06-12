import type { Metadata } from "next";

export const BASE_URL = "https://siddharthchakraborty.dev";
export const SITE_NAME = "Siddharth Chakraborty";
export const DEFAULT_TITLE = "Siddharth Chakraborty | CS Student & Developer";
export const DEFAULT_DESCRIPTION =
	"Siddharth Chakraborty is a Computer Science Engineering student at Graphic Era Hill University, building full-stack apps, AI/ML systems, and automation tools.";
export const DEFAULT_SOCIAL_IMAGE = "/social-card.svg";
export const DEFAULT_SOCIAL_IMAGE_ALT =
	"Siddharth Chakraborty developer portfolio preview card.";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

export const siteVerification: Metadata["verification"] = {
	...(googleVerification ? { google: googleVerification } : {}),
	...(bingVerification
		? {
				other: {
					"msvalidate.01": bingVerification,
				},
			}
		: {}),
};

export function absoluteUrl(pathname = "/") {
	return new URL(pathname, BASE_URL).toString();
}

type MetadataInput = {
	title: string;
	description: string;
	pathname: string;
	keywords?: string[];
	image?: string;
	openGraphType?: "website" | "article";
	publishedTime?: string;
	modifiedTime?: string;
};

export function createPageMetadata({
	title,
	description,
	pathname,
	keywords,
	image = DEFAULT_SOCIAL_IMAGE,
	openGraphType = "website",
	publishedTime,
	modifiedTime,
}: MetadataInput): Metadata {
	const url = absoluteUrl(pathname);
	const socialImage = absoluteUrl(image);

	return {
		title,
		description,
		keywords,
		alternates: {
			canonical: url,
		},
		category: "Software Engineering",
		openGraph: {
			title,
			description,
			url,
			siteName: SITE_NAME,
			locale: "en_IN",
			type: openGraphType,
			images: [
				{
					url: socialImage,
					width: 1200,
					height: 630,
					alt: DEFAULT_SOCIAL_IMAGE_ALT,
				},
			],
			...(publishedTime ? { publishedTime } : {}),
			...(modifiedTime ? { modifiedTime } : {}),
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [socialImage],
		},
	};
}
