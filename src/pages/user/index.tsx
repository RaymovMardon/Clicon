import React, { useState,useEffect } from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import styles from "./user.module.scss"
const onChange = (key: string) => {
  console.log(key);
};
export type userMy={
    name:string;
    email:string;
    password:string;
}


  
  
const UserP: React.FC = () => {
    const [user, setUser] = useState<userMy | null>(null);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        
        const formData = new FormData(event.currentTarget);
        const input = formData.get('input') as string;  
        const input2 = formData.get('input2') as string;  
        const input3 = formData.get('input3') as string;  
        const input4 = formData.get('input4') as string; 
     
        if (input3 === input4) {
          const userObj = {
            name: input,
            email: input2,
            password: input3,
          };
    
          localStorage.setItem('userSet', JSON.stringify(userObj));
          setUser(userObj);
          alert("Success Sign Up")
        } else {
          alert('Password incorrect');
        }
      };
      
 const handleSubmitGet = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const storedUser = localStorage.getItem('userSet');
        
        if (storedUser) {
          const userObj = JSON.parse(storedUser); 
         
          
          const formData = new FormData(event.currentTarget);
          const input5 = formData.get('input5') as string; 
          const input6 = formData.get('input6') as string;
          setUser(userObj);
          if(user?.email==input5){
            if(user?.password==input6){
                alert("Success login");
                const g:boolean=true;
                sessionStorage.setItem("user",JSON.stringify(g))
            }else{
                alert("pussword incorrect");
                
            }
          }else{
            alert("login incorrect");
          }
          // Логика с input5, например, выводим его
          
        } else {
          alert('Empty data. Sign Up');
        }
        
      };
      useEffect(() => {
        if (user) {
          console.log("Updated user:", user);
          
        }
      }, [user]);
      const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Sign In',
          children: (
            <div>
               <form onSubmit={handleSubmitGet}>
              <label>Email Adress</label>
                <input className="p-1.5 border-1 rounded-xs border-gray-300 w-full" name="input5" type="text" placeholder="Enter something..." />
                <label>Password</label>
                <input className="p-1.5 border-1 rounded-xs border-gray-300 w-full" name="input6" type="password" placeholder="8+ charachters" />
                <button className="w-full" type="submit">Submit </button>
                <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-3 text-gray-500 text-sm">or</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Google login */}
      <div className="w-full flex !bg-[white] cursor-not-allowed text-center items-center gap-3 border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-50 transition">
        <FcGoogle className="text-xl" />
        <span className="text-gray-700 text-center text-sm font-medium">Login with Google</span>
      </div>

      {/* Apple login */}
      <div className="w-full flex !bg-[white] cursor-not-allowed items-center gap-3 border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-50 transition mt-3">
        <FaApple className="text-xl text-black" />
        <span className="text-gray-700 text-sm font-medium">Login with Apple</span>
      </div>
              </form>
            </div>
          ),
        },
        {
          key: '2',
          label: 'Sign Up',
          children: (
            <div>
            
              <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input className="p-1.5 border-1 rounded-xs border-gray-300 w-full" name="input" type="text" placeholder="" />
                <label>Email Adress</label>
                <input className="p-1.5 border-1 rounded-xs border-gray-300 w-full" name="input2" type="email" placeholder="" />
                <label>Password</label>
                <input className="p-1.5 border-1 rounded-xs border-gray-300 w-full" name="input3" type="password" placeholder="8+ charachters" />
                <label>Confirm Password</label>
                <input className="p-1.5 border-1 rounded-xs border-gray-300 w-full" name="input4" type="password" placeholder="" />
                
                <button className="w-full" type="submit">Submit</button>
                <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-3 text-gray-500 text-sm">or</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
                <div className="w-full flex !bg-[white] cursor-not-allowed text-center items-center gap-3 border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-50 transition">
        <FcGoogle className="text-xl" />
        <span className="text-gray-700 text-center text-sm font-medium">Login with Google</span>
      </div>

      {/* Apple login */}
      <div className="w-full flex !bg-[white] cursor-not-allowed items-center gap-3 border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-50 transition mt-3">
        <FaApple className="text-xl text-black" />
        <span className="text-gray-700 text-sm font-medium">Login with Apple</span>
      </div>
              
              </form>
            </div>
          ),
        },
      ];
      
    return(
<>
<div className="custom_container">
    <div className={styles.user_form}>
    <div className="my-15 rounded-sm p-5 shadow-2xl shadow-gray-300">
<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
</div>
</div>
</div>
</>
);};
export default UserP;