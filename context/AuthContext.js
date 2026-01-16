import React, { createContext, useContext, useState } from 'react';


const FAKE_USERS = [
    { email: 'luffy@gmail.com', password: '123456', name: 'Monkey D. Luffy', avatar: 'pirate' },
    { email: 'zoro@gmail.com',  password: '123456', name: 'Roronoa Zoro',    avatar: 'sword' },
    { email: 'hungtrinh123',  password: '123456', name: 'Humaris',           avatar: 'map' },
];
const AuthContext = createContext({
    user : null,
    login: () =>({success:false}),
    logout: () =>{},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login =(email,password)=>{
        const found = FAKE_USERS.find(u=> u.email === email && u.password === password);
        if(found){
            const{password,...userWithoutPassword} =found;
            setUser(userWithoutPassword);
            return{success:true};
        }
        return{success:false,error:"Sai email hoặc mật khẩu"}
    }
    const logout =()=>setUser(null);
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);