import { Avatar } from "@base-ui/react/avatar";
import BracketLink from "./BracketLink";

type IntroLink = {
	label: string;
	href: string;
	srContext?: string;
	target?: "_blank";
	rel?: "noopener noreferrer";
};

const LINKS: IntroLink[] = [
	{
		label: "github",
		href: "https://github.com/sidchak-gh",
		srContext: "GitHub profile",
		target: "_blank",
		rel: "noopener noreferrer",
	},
	{
		label: "linkedin",
		href: "https://linkedin.com/in/sidchak",
		srContext: "LinkedIn profile",
		target: "_blank",
		rel: "noopener noreferrer",
	},
	{
		label: "email",
		href: "mailto:siddharthchakraborty404@gmail.com",
		srContext: "Email Siddharth",
		target: "_blank",
		rel: "noopener noreferrer",
	},
];

const Intro = () => {
	return (
		<section className="intro" aria-labelledby="intro-heading">
			<div className="intro__header">
				<Avatar.Root className="intro__avatar">
					<Avatar.Image
						src="/klungo.webp"
						alt="Siddharth Chakraborty"
						width={72}
						height={72}
					/>
					<Avatar.Fallback>SC</Avatar.Fallback>
				</Avatar.Root>

				<div className="intro__title-group">
					<h1 id="intro-heading">Siddharth Chakraborty</h1>
					<p className="intro__subtitle">CS Student · Full Stack & AI/ML Developer</p>
				</div>
			</div>
			<p className="intro__about">
				I’m a Computer Science student focused on turning ideas into intelligent,
				user-focused digital experiences at the intersection of engineering, data, and design.
			</p>
			<p className="intro__note">
				Based in India. Focused on practical software, AI systems, and data-driven solutions.
			</p>
			<nav className="intro__links" aria-label="Primary links">
				{LINKS.map((link) => (
					<BracketLink
						key={link.label}
						className="intro__action"
						href={link.href}
						target={link.target}
						rel={link.rel}
						srContext={link.srContext}
					>
						{link.label}
					</BracketLink>
				))}
			</nav>
		</section>
	);
};

export default Intro;
