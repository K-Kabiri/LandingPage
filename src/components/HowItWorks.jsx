import React from "react";
import StepImage1 from "/public/vite.svg";
import StepImage2 from "/public/vite.svg";
import StepImage3 from "/public/vite.svg";
import theme from "../theme.js";

const steps = [
    {
        number: "01",
        title: "طراحی فرآیند کاری",
        icons: ["android", "apple", "windows"],
        description: "در یک محیط گرافیکی و کاربرپسند به سادگی فرآیند کسب و کار خود را طراحی کنید",
        image: StepImage1,
        reverse: false,
    },
    {
        number: "02",
        title: "طراحی فرم ها",
        subtitle: "با چند کلیک ساده",
        description: "اطلاعات جمع آوری شده در فرم ها به طور خودکار ذخیره شده و گزارشات آن ایجاد می شود",
        image: StepImage2,
        reverse: true,
    },
    {
        number: "03",
        title: "با زدن دکمه انتشار، از برنامه خود لذت ببرید",
        subtitle: (
            <>
                سوالی دارید؟ چک کنید <a className=" underline" style={{color: theme.palette.primary.main}} href="#">سوالات
                متداول</a>
            </>
        ),
        description: "بهترین تجربه از یک برنامه را داشته باشید، جستجو و به اشتراک بگذارید",
        image: StepImage3,
        reverse: false,
    },
    {
        number: "04",
        title: "طراحی فرآیند کاری",
        icons: ["android", "apple", "windows"],
        description: "در یک محیط گرافیکی و کاربرپسند به سادگی فرآیند کسب و کار خود را طراحی کنید",
        image: StepImage1,
        reverse: true,
    },
];

const HowItWorks = () => {
    return (
        <section
            id="how_it_work"
            className="bg-white px-2 py-10 flex flex-col gap-10 w-screen  justify-center items-center"
        >
            <div className="flex flex-col max-w-[1280px] w-[100%] gap-10 px-16">
                <div className="flex flex-col gap-10 text-center">
                    <h2 className="text-3xl font-bold">
                        <span style={{color: theme.palette.primary.main}}>نحوه کار</span> - سه قدم آسان
                    </h2>
                    <p className="mt-4 text-gray-600">
                        سینتا امکان ایجاد نرم‌افزارهای سفارشی و متناسب با نیازهای کسب‌وکاری شرکت‌های مختلف در زمانی
                        کوتاه‌تر از روش‌های سنتی را در سه مرحله کلی فراهم نموده است
                    </p>
                </div>

                <div className="relative flex flex-col">
                    <div
                        className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 transform -translate-x-1/2 z-0">
                    </div>

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
                                    {step.icons && (
                                        <div className="flex gap-2 justify-end">
                                            {step.icons.map((icon, i) => (
                                                <div
                                                    key={i}
                                                    className="w-10 h-10 bg-gray-200 text-white flex items-center justify-center rounded-full text-lg"
                                                >
                                                    <i className={`icons-brand-${icon}`}></i>
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
                                            idx%3 === 0
                                                ? "bg-[#fff1da] border-[#f9e8cd]"
                                                : idx%3 === 1
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
