import SEO from "@/components/SEO";
import { Metadata } from "next";

const titleShort = "GAS in BeatShot | Developer Blog";
const titleLong = "An Overview of Unreal's Gameplay Ability System in BeatShot";
const description =
	"Why is the Gameplay Ability System used in BeatShot? This article explains the role of GAS and " +
	"provides a walkthrough of a common ability.";

export const metadata: Metadata = SEO({
	title: titleShort,
	ogTwitterTitle: titleLong,
	description: description,
	type: "article",
	url: "/devblog/gameplay-ability-system-overview",
	twitterCard: "summary_large_image",
	additionalKeywords: [
		"unreal",
		"engine",
		"ue",
		"gameplay",
		"ability",
		"system",
		"gas",
		"gameplay task",
		"ability system component",
		"gameplay ability system",
		"attribute",
		"gameplay effect",
		"delegate",
		"c++",
	],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
	return children;
};
export default Layout;
