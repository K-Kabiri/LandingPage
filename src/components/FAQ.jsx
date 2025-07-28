import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import theme from "../js/theme.js";
import {Typography} from "@mui/material";

const faqs = [
    {
        question: "چگونه می توانم پرداخت کنم؟",
        answer:
            "پس از انتخاب نوع سرویس خود با پشتیبان ما تماس گرفته و ضمن دریافت فاکتور و صورت‌حساب، حساب کاربری خود را فعال نمایید.",
    },
    {
        question: "چگونه حساب را تنظیم کنیم؟",
        answer:
            "به بخش تنظیمات حساب رفته و اطلاعات کاربری خود را کامل نمایید.",
    },
    {
        question: "چه فرآیندی برای بازپرداخت است ؟",
        answer:
            "در صورت عدم رضایت، با پشتیبانی تماس گرفته و فرم بازپرداخت را پر نمایید.",
    },
    {
        question: "چه فرآیندی برای بازپرداخت است ؟",
        answer:
            "در صورت عدم رضایت، با پشتیبانی تماس گرفته و فرم بازپرداخت را پر نمایید.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-6 px-6 md:px-10 py-10 text-center bg-gradient-to-b from-orange-100 to-white"
             dir="rtl">
            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                dir="rtl"
                className="text-center"
                style={{ color: theme.palette.text.primary }}
            >
                <span style={{ color: theme.palette.text.secondary }}>سوالات متداول - </span>سوالات متداول پرسیده شده
            </Typography>

            <Typography
                color={theme.palette.text.primary}
                lineHeight={2}
                sx={{ px: 2, justifyContent: 'center', width: '100%' }}
                className="text-sm sm:text-base md:text-lg leading-relaxed"
            >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، چیدمان و متون بلکه روزنامه با استفاده از طراحان گرافیک است.
            </Typography>

            <div className="space-y-6 sm:space-y-8 mx-0 md:mx-30">
                {faqs.map((faq, index) => (
                    <div key={index} className="rounded-xl bg-violet-100 overflow-hidden shadow-sm">
                        <button
                            className="w-full flex items-center justify-between p-4 sm:p-5 font-medium focus:outline-none transition-all"
                            onClick={() => toggleFAQ(index)}
                        >
          <span
              className="text-right font-bold text-sm sm:text-base md:text-lg"
              style={{
                  color:
                      openIndex === index
                          ? theme.palette.text.secondary
                          : theme.palette.text.primary,
              }}
          >
            {faq.question}
          </span>

                            <span className="ml-2">
            {openIndex === index ? (
                <RemoveIcon className="text-indigo-500" />
            ) : (
                <AddIcon className="text-indigo-500" />
            )}
          </span>
                        </button>

                        {openIndex === index && (
                            <div className="px-4 pb-4 text-gray-700 text-sm sm:text-base md:text-lg leading-7 text-right">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default FAQ;
