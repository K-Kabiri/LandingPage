import React from "react";
import { useHowItWorksData } from "../api/howItWorks.js";
import theme from "../theme.js";

const HowItWorks = ({ id = 1 }) => {
    const { data, isLoading, isError } = useHowItWorksData(id);

    if (isLoading) return <p className="text-center">در حال بارگذاری...</p>;
    if (isError) return <p className="text-center text-red-500">خطا در دریافت اطلاعات</p>;

    const steps = data.workSteps_items.map((item, idx) => ({
        number: (idx + 1).toString().padStart(2, "0"),
        title: item.title,
        subtitle: item.hyperLinks?.length > 0 ? (
            <>
                سوالی دارید؟ چک کنید{" "}
                <a
                    className="underline"
                    style={{ color: theme.palette.primary.main }}
                    href={item.hyperLinks[0].link || "#"}
                >
                    {item.hyperLinks[0].text}
                </a>
            </>
        ) : item.subtitle !== "-" ? item.subtitle : null,
        description: item.description,
        image: item.images?.[0]?.image,
        icons: item.buttons?.map((btn) => btn.icon) || [],
        reverse: idx % 2 === 1,
    }));

    return (
        <section
            id="how_it_work"
            className="bg-white px-2 py-10 flex flex-col gap-10 w-screen  justify-center items-center"
        >
            <div className="flex flex-col max-w-[1280px] w-[100%] gap-10 px-4 md:px-16">
                <div className="flex flex-col gap-10 text-center">
                    <h2 className="text-3xl font-bold">
                        <span style={{ color: theme.palette.primary.main }}>
                            {data.title}
                        </span>{" "}
                        {data.subtitle}
                    </h2>
                    <p className="mt-4 text-gray-600">{data.description}</p>
                </div>

                <div className="relative flex flex-col">
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>

                    <ul className="flex flex-col">
                        {steps.map((step, idx) => (
                            <li
                                key={idx}
                                className={`flex flex-row md:flex-row items-center ${
                                    step.reverse ? "flex-row-reverse" : ""
                                } md:gap-4`}
                            >
                                <div className="text-end w-1/3">
                                    <h4 className="text-xl font-semibold">{step.title}</h4>
                                    {step.icons.length > 0 && (
                                        <div className="flex gap-2 mt-2 justify-end">
                                            {step.icons.map((icon, i) => (
                                                <div
                                                    key={i}
                                                    className="w-10 h-10 bg-gray-200 text-white flex items-center justify-center rounded-full text-lg"
                                                >
                                                    <img src={icon} alt="icon" className="w-9 h-9 cursor-pointer" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {step.subtitle && (
                                        <span className="block font-semibold">{step.subtitle}</span>
                                    )}
                                    <p className="text-gray-600">{step.description}</p>
                                </div>

                                <div className="w-1/3 h-full flex items-center justify-center">
                                    <div
                                        className={`w-20 h-20 flex items-center justify-center text-2xl font-bold rounded-full border-8 z-20 ${
                                            idx % 3 === 0
                                                ? "bg-[#fff1da] border-[#f9e8cd]"
                                                : idx % 3 === 1
                                                    ? "bg-[#d8fdff] border-[#c5f5f8]"
                                                    : "bg-[#ffe9f1] border-[#fcdde9]"
                                        }`}
                                    >
                                        {step.number}
                                    </div>
                                </div>

                                <div className="w-1/3">
                                    <img
                                        src={step.image}
                                        alt={`step-${idx + 1}`}
                                        className="rounded-xl bg-cover w-100 h-100"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
