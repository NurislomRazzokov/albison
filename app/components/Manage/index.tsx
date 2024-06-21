"use client";
// import { useState } from "react";
// import { Switch } from "@headlessui/react";
// import Image from "next/image";
import { Responsive } from "../Slider";
// import right from "@/public/images/manage/right.svg";
import itgirl from '@/public/images/ITgirls.webp'
import bootcamp from '@/public/images/bootcamp.webp'
import itkids from '@/public/images/IT_Robotics(1).webp'
const names = [
	{
		heading: "IT Girls",
		// price: 100,
		user: "3 0ylik",
		// category: "monthly",
		features: [
			"3 oylik kurs + amaliyot",
			"Bitiruvchilarga ish taklif qilish",
			"Jamoa uchun bepul ingliz tili kurslari ",
			
		],
		link: "https://t.me/albisonbot",	
		image:itgirl
	},
	{
		heading: "Bootcamp",
		// price: 0,
		user: "5 oylik",
		category: "monthly",
		features: [
			"3 oylik kurs + amaliyot",
			"Bitiruvchilarga ish taklif qilish",
			"Jamoa uchun bepul ingliz tili kurslari ",
			
		],
		link: "https://t.me/albisonbot",
		image:bootcamp
	},
	{
		heading: "IT/Robotics",
		// price: 300,
		user: "Oylik",
		category: "monthly",
		features: [
			"3 oylik kurs + amaliyot",
			"Bitiruvchilarga ish taklif qilish",
			"Jamoa uchun bepul ingliz tili kurslari ",
			
		],
		link: "https://t.me/albisonbot",
		image:itkids
	},
];

const Manage = () => {
	// const [enabled, setEnabled] = useState(false);
	// const [selectedCategory, setSelectedCategory] = useState("monthly");

	// const toggleEnabled = () => {
	// 	setEnabled(!enabled);
	// 	setSelectedCategory(enabled ? "monthly" : "yearly");
	// };

	// const filteredData = names.filter(
	// 	(items) => items.category === selectedCategory
	// );

	return (
		<div id="services-section">
			<div className="m-auto max-w-7xl sm:py-20 lg:px-8 my-16">
				<h3 className="text-center text-4xl sm:text-65xl font-black">
					To'g'ri tanlov o'z <br /> qo'lingizda
				</h3>
			</div>
			<div className="m-auto">
				<Responsive slide={names} />
			</div>
		</div>
	);
};

export default Manage;
