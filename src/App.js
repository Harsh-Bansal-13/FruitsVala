import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { CreateContainer, Header, MainContainer} from './components';
import { AnimatePresence } from 'framer-motion';

import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';

const App = () => {
    const [{foodItems},dispatch]=useStateValue();
    const fetchData=async () => {
        await getAllFoodItems().then((data)=>{
            dispatch({
                type:actionType.SET_FOOD_ITEMS,
                foodItems:data
            })
        });
    };
    useEffect(()=>{
        fetchData();
    },[]);
    return (
        <AnimatePresence >        
            <div className="w-screen h-auto flex flex-col bg-purple-100">
            <Header></Header>
            <main className='mt-24 p-6 md:mt-10 md:px-16 w-full '>
                <Routes>
                    <Route path="/*" element={<MainContainer/>}></Route>
                    <Route path="/createItem" element={<CreateContainer/>}></Route>
                </Routes>
            </main>
        </div>
        </AnimatePresence>

    )
};

export default App