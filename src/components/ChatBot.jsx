import { Box, IconButton, Input, TextField, Typography, useTheme } from "@mui/material";
import SendIcon from "./icons/sendIcon";
import RobotIcon from "./icons/robotIcon";
import { useState } from "react";

const ChatBot = () => {

    const [messages, setMessages] = useState([
        { id: 0, text: "سلام، در مورد سینتا بهم بگو", sender: "user" },
        {
            id: 1,
            text: "پلتفرم سینتا یک پلتفرم کم‌کد برای طراحی فرایندهای کسب‌وکار است.",
            sender: "bot",
        },
                { id: 2, text: "سلام، در مورد سینتا بهم بگو", sender: "user" },

        {
            id: 3,
            text: "پلتفرم سینتا یک پلتفرم کم‌کد برای طراحی فرایندهای کسب‌وکار است.",
            sender: "bot",
        },
        { id: 2, text: "سلام، در مورد سینتا بهم بگو", sender: "user" },

        {
            id: 3,
            text: "پلتفرم سینتا یک پلتفرم کم‌کد برای طراحی فرایندهای کسب‌وکار است.",
            sender: "bot",
        },
    ]);


    const theme = useTheme();
    return(
        <div className="w-full bg-white p-5">
            <IconButton>

            </IconButton>
            <Box className="w-80 h-[30rem] bg-white rounded-3xl border border-slate-300 flex flex-col justify-between shadow-lg"
                >

                <Box className=" flex flex-row justify-between w-full px-4 py-3 rounded-t-3xl bg-contain bg-no-repeat items-start h-28 !bg-[url(./images/Rectangle4.png)]"
                >
                    {/* <img src="./public\images\Rectangle 4168.png"/> */}
                    <div className="flex flex-row text-purple-900 items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentCOlor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7756 5.77566L16.4308 3.81026H17.5692L18.2243 5.77566L20.1897 6.43079V7.56921L18.2243 8.22434L17.5692 10.1897H16.4308L15.7756 8.22434L13.8102 7.56921V6.43079L15.7756 5.77566Z" fill="currentCOlor"/>
                            <path d="M18 12V19H16V12H18Z" fill="currentCOlor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33728 6H10.6627L14.0329 19H11.9668L11.1891 16H6.81082L6.03304 19H3.96692L7.33728 6ZM7.32934 14H10.6706L9.11505 8H8.88489L7.32934 14Z" fill="currentCOlor"/>
                        </svg>
                        <RobotIcon/>
                        
                    </div>
                    <p>Hi...</p>
                </Box>
                {messages.length > 0 ? (
                <Box className="flex flex-col gap-3 p-4 max-h-[80vh] overflow-y-auto">
                    {messages.map((msg) => (
                    <Box
                        key={msg.id}
                        className={`max-w-[75%] px-4 py-2 rounded-xl text-xs leading-6 ${
                        msg.sender === "user"
                            ? "self-end bg-blue-100 text-right rounded-br-none"
                            : "self-start bg-gray-100 text-right rounded-bl-none"
                        }`}
                    >
                        {msg.text}
                    </Box>
                    ))}
                </Box>
                ) : (
                <Box className="chatbox w-full h-full flex flex-col gap-5 items-center justify-center text-gray-500">

                    <div className="border rounded-full p-5">
                        <svg width="40" height="40" viewBox="0 0 32 32" fill="currentCOlor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 6C15 6.26522 14.8946 6.51957 14.7071 6.70711C14.5196 6.89464 14.2652 7 14 7C13.7348 7 13.4804 6.89464 13.2929 6.70711C13.1054 6.51957 13 6.26522 13 6C13 5.73478 13.1054 5.48043 13.2929 5.29289C13.4804 5.10536 13.7348 5 14 5C14.2652 5 14.5196 5.10536 14.7071 5.29289C14.8946 5.48043 15 5.73478 15 6ZM18 7C18.2652 7 18.5196 6.89464 18.7071 6.70711C18.8946 6.51957 19 6.26522 19 6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5C17.7348 5 17.4804 5.10536 17.2929 5.29289C17.1054 5.48043 17 5.73478 17 6C17 6.26522 17.1054 6.51957 17.2929 6.70711C17.4804 6.89464 17.7348 7 18 7Z" fill="currentCOlor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C12.2044 2 11.4413 2.31607 10.8787 2.87868C10.3161 3.44129 10 4.20435 10 5V9C10 9.53043 10.2107 10.0391 10.5858 10.4142C10.9609 10.7893 11.4696 11 12 11H20C20.5304 11 21.0391 10.7893 21.4142 10.4142C21.7893 10.0391 22 9.53043 22 9V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2H13ZM12 5C12 4.73478 12.1054 4.48043 12.2929 4.29289C12.4804 4.10536 12.7348 4 13 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V9H12V5ZM12 12C11.2044 12 10.4413 12.3161 9.87868 12.8787C9.31607 13.4413 9 14.2044 9 15V17C9 17.7956 9.31607 18.5587 9.87868 19.1213C10.4413 19.6839 11.2044 20 12 20H20C20.7956 20 21.5587 19.6839 22.1213 19.1213C22.6839 18.5587 23 17.7956 23 17V15C23 14.2044 22.6839 13.4413 22.1213 12.8787C21.5587 12.3161 20.7956 12 20 12H12ZM11 15C11 14.7348 11.1054 14.4804 11.2929 14.2929C11.4804 14.1054 11.7348 14 12 14H20C20.2652 14 20.5196 14.1054 20.7071 14.2929C20.8946 14.4804 21 14.7348 21 15V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H12C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17V15Z" fill="currentCOlor"/>
                            <path d="M7 12C7.26522 12 7.51957 12.1054 7.70711 12.2929C7.89464 12.4804 8 12.7348 8 13V21C8 21.2652 7.89464 21.5196 7.70711 21.7071C7.51957 21.8946 7.26522 22 7 22C6.73478 22 6.48043 21.8946 6.29289 21.7071C6.10536 21.5196 6 21.2652 6 21V13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12ZM26 13C26 12.7348 25.8946 12.4804 25.7071 12.2929C25.5196 12.1054 25.2652 12 25 12C24.7348 12 24.4804 12.1054 24.2929 12.2929C24.1054 12.4804 24 12.7348 24 13V21C24 21.2652 24.1054 21.5196 24.2929 21.7071C24.4804 21.8946 24.7348 22 25 22C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21V13ZM13 21C13.2652 21 13.5196 21.1054 13.7071 21.2929C13.8946 21.4804 14 21.7348 14 22V27C14.2652 27 14.5196 27.1054 14.7071 27.2929C14.8946 27.4804 15 27.7348 15 28C15 28.2652 14.8946 28.5196 14.7071 28.7071C14.5196 28.8946 14.2652 29 14 29H12C11.7348 29 11.4804 28.8946 11.2929 28.7071C11.1054 28.5196 11 28.2652 11 28C11 27.7348 11.1054 27.4804 11.2929 27.2929C11.4804 27.1054 11.7348 27 12 27V22C12 21.7348 12.1054 21.4804 12.2929 21.2929C12.4804 21.1054 12.7348 21 13 21ZM20 22C20 21.7348 19.8946 21.4804 19.7071 21.2929C19.5196 21.1054 19.2652 21 19 21C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22V27C17.7348 27 17.4804 27.1054 17.2929 27.2929C17.1054 27.4804 17 27.7348 17 28C17 28.2652 17.1054 28.5196 17.2929 28.7071C17.4804 28.8946 17.7348 29 18 29H20C20.2652 29 20.5196 28.8946 20.7071 28.7071C20.8946 28.5196 21 28.2652 21 28C21 27.7348 20.8946 27.4804 20.7071 27.2929C20.5196 27.1054 20.2652 27 20 27V22Z" fill="currentCOlor"/>
                        </svg>
                    </div>
                    <Typography className=" text-xs" 
                        sx={{ fontSize: theme.typography.sm.fontSize}}
                        >
                        سلاام. چه کمکی از دستم برمیاد ؟
                    </Typography>
                </Box>
                )}
                
                <Box className="flex flex-row justify-between items-center py-3 px-4 gap-2">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        sx={{
                            width: "100%",
                            '& .MuiInputBase-input': {
                            fontSize: '0.875rem',
                            padding: '5px 5px',
                            borderRadius: "10px",
                            },
                            '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            padding: "1px 4px",
                            // حالت عادی border
                            '& fieldset': {
                                borderColor: '#d1d5db', // مثلاً خاکستری روشن
                            },
                            // حالت فوکوس
                            '&.Mui-focused fieldset': {
                                borderColor: '#7e3af2', // رنگ دلخواه در حالت فوکوس
                                borderWidth: '1px',     // ضخامت دلخواه
                            },
                            },
                        }}
                        />

                        <IconButton className="p-1.5 rounded-full !bg-purple-100" >
                            <SendIcon/>
                        </IconButton>
                    
                </Box>
            </Box>
        </div>
    )
}
export default ChatBot;