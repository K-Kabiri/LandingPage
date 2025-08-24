import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper, Avatar, CircularProgress, useTheme } from "@mui/material";
import { useAboutData } from "../api/about.js";

export default function AboutProgram({ id, scrollId }) {
  const theme = useTheme();

  const { data, isLoading, isError, error } = useAboutData(id);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState([]);

  const toPersianDigits = (num) => num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  const startCounting = (abouts) => {
    if (!abouts) return;

    abouts.forEach((about, index) => {
      const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
      const numStr = about.title
        .replace(/[^\d۰-۹]/g, "")
        .replace(/[۰-۹]/g, (d) => persianDigits.indexOf(d).toString());
      const end = parseInt(numStr, 10) || 0;

      let start = 0;
      const duration = 1500;
      const stepTime = Math.max(Math.floor(duration / (end || 1)), 20);

      clearInterval(sectionRef.current?.[`timer${index}`]);

      sectionRef.current[`timer${index}`] = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
        if (start >= end) {
          clearInterval(sectionRef.current[`timer${index}`]);
        }
      }, stepTime);
    });
  };

  useEffect(() => {
    if (data?.abouts?.length) {
      setCounts(new Array(data.abouts.length).fill(0));
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && data?.abouts?.length) {
          startCounting(data.abouts);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [data]);

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          py: 8,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          py: 8,
        }}
      >
        <Typography color="error">خطا در بارگذاری داده‌ها: {error.message}</Typography>
      </Box>
    );
  }

  return (
    <Box
      id={scrollId}
      ref={sectionRef}
      dir="rtl"
      className="overflow-x-hidden w-screen"
      sx={{
        backgroundColor: theme.palette.background.paper,
        px: { xs: 2, md: 3 },
        py: 10,
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          gap: 5,
          width: "100%",
          maxWidth: "1280px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "right" },
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color={theme.palette.text.primary}
            sx={{ mb: 2 }}
          >
            {data.title}{" "}
            <Box component="span" color={theme.palette.primary.main}>
              {data.subtitle}
            </Box>
          </Typography>

          <Typography
            color={theme.palette.text.primary}
            lineHeight={2}
            sx={{ maxWidth: "100%", mx: { xs: "auto", md: 0 } }}
          >
            {data.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 4,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {data.abouts.map((item, idx) => (
              <Paper
                key={item.id}
                elevation={3}
                sx={{
                  width: 250,
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: theme.palette.primary.light,
                }}
              >
                <Avatar src={item.icon} alt={item.title} sx={{ width: 50, height: 50, ml: 2 }} />
                <Box>
                  <Typography variant="h5" fontWeight="bold" color={theme.palette.text.secondary}>
                    {counts[idx] !== undefined ? toPersianDigits(counts[idx]) + "+" : item.title}
                  </Typography>
                  <Typography color="text.primary" mt={0.5}>
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        {/*Picture*/}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            animation: "floatUpDown 3s ease-in-out infinite",
            animationDelay: `${0.1}s`,
            "@keyframes floatUpDown": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-10px)" },
            },
          }}
        >
          {data.images?.length === 1 && (
            <Box
              component="img"
              src={data.images[0].image}
              alt={data.images[0].name}
              sx={{
                width: { xs: "100%", sm: 400, md: 500 },
              }}
            />
          )}

          {data.images?.length === 2 && (
            <>
              <Box
                component="img"
                src={data.images[0].image}
                alt={data.images[0].name}
                sx={{
                  width: { xs: "100%", sm: 400, md: 500 },
                  borderRadius: 3,
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src={data.images[1].image}
                alt={data.images[1].name}
                sx={{
                  position: "absolute",
                  top: { xs: 200, md: 200 },
                  left: { xs: 20, md: 0 },
                  width: { xs: 150, md: 180 },
                  height: { xs: 250, md: 280 },
                  borderRadius: 3,
                  boxShadow: 4,
                  border: "1px solid #e0e0e0",
                  zIndex: 2,
                }}
              />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
