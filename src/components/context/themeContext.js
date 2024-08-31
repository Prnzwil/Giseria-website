// theme.js
export const lightTheme = {
    palette: {
        mode: 'light',
        primary: {
            main: '#333',
        },
        secondary: {
            main: '#666',
        },
    },
};

export const darkTheme = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#ccc',
        },
    },
};




// "use client"
// import React, { createContext, useState } from "react";

// const themeContext = createContext();

// const ThemeProvider = ({ children }) => {

//     // const [theme, setTheme] = useState({
//     //     isDarkTheme: false,
//     //     darkTheme: {
//     //         background: "black",
//     //         text: "white"
//     //     },
//     //     lightTheme: {
//     //         background: "white",
//     //         text: "black"
//     //     }
//     // }
//     // )(

//     const [isDarkTheme, setIsDarkTheme] = useState(false);

//     const changeTheme = () => {
//         setIsDarkTheme(!isDarkTheme);
//     };

//     return (
//         <themeContext.Provider value={{ ...isDarkTheme, changeTheme }}>
//             {children}
//         </themeContext.Provider>
//     )
// }

// export { ThemeProvider, themeContext };

// // export default function Home() {
// //     return (
// //         <div>
// //             Hello
// //         </div>
// //     )
// // }