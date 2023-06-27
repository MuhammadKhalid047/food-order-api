import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './style.css'
import { addToCart ,updateCart} from '../Slice/orderSlice'
import DataJson from './OrderData.json'
import { useGetDataQuery } from '../Api/apiSlice';

const Order = ({menuItems}) => {
    const [sushiV ,setSushi] = useState(1);
    const [Schnitzel ,setSchnitzel] = useState(1);
    const [burger ,setBurger] = useState(1);
    const [bowl ,setBowl] = useState(1);
    const dispatch = useDispatch();
    const [bool, setbool]  = useState(true)
    const [bool1, setbool1]  = useState(true)
    const [bool2, setbool2]  = useState(true)
    const [bool3, setbool3]  = useState(true)

    const AddSushi   = () =>  {
        if(bool) {   
            const Data = {name: 'Sushi',price: 22.99,order: 0,total: 0,};
            dispatch(addToCart(Data));
            setbool(false) 
        }        
    };
    const suschiCart = ()=>{
        AddSushi();
        dispatch(updateCart({ name: 'Sushi', quantity: (parseInt(sushiV)) }));
        // dispatch(updateCart({ item: 'sushi', quantity: (parseInt(sushiV)) }))
    }
    const AddSchnitzel   = () =>  {
        if (bool1) {   
            const Data = { name: 'Schnitzel', price: 16.50, order: 0, total: 0 };
            dispatch(addToCart(Data));
            setbool1(false) 
        }        
    };
    const schnitzelCart = ()=>{
        AddSchnitzel();
        dispatch(updateCart({ name: 'Schnitzel', quantity: (parseInt(Schnitzel)) }));
    }
    const AddBurger   = () =>  {
        if (bool2) {   
            const Data = { name: 'Burger', price: 12.99, order: 0, total: 0 };
            dispatch(addToCart(Data));
            setbool2(false) 
        }        
    };
    const BurgerCart = ()=>{
        AddBurger();
        dispatch(updateCart({ name: 'Burger', quantity: (parseInt(burger)) }));
    }
    const AddBowl   = () =>  {
        if (bool3) {   
            const Data = { name: 'Bowl', price: 18.99, order: 0, total: 0 };
            dispatch(addToCart(Data));
            setbool3(false) 
        }        
    };
    const BowlCart = ()=>{
        AddBowl();
        dispatch(updateCart({ name: 'Bowl', quantity: (parseInt(bowl)) }));
    }
    
  return (
      <div className='orderMealList'>
      {DataJson.map((menuItems) => (
       
        <div className='d-flex justify-contant-space-between align-items-center orderMealListItem' key={menuItems.id}>
            <div className='d-flex justify-contant-space-between align-items-center gap-2'>
                <div className="expense-date d-flex-col align-items-center text-white justify-contant-center">
                    <div className="expense-month font-bold">{new Date(menuItems.date).toLocaleString('default', { month: 'short' })}</div>
                    <div className="expense-year">{new Date(menuItems.date).getFullYear()}</div>
                    <div className="expense-day">{new Date(menuItems.date).getDate()}</div>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <img src={menuItems.picture} alt={menuItems.name} width='80px'/>
                </div>
            </div>
            <div>
                <h3>{menuItems.name}</h3>
                <p className='foodItem'>{menuItems.description}</p>
                <p className='prices font-bold'>${menuItems.price}</p>
            </div>
            {menuItems.id === "m1" && (
            <div className="">
                <div className="inputItems"> 
                    <label for="amount_m1" className='font-bold'>Amount</label>
                    <input id="amount_m1" className='inputItems-count' type="number" min="1" max="5" value={sushiV} onChange={(e)=>setSushi(e.target.value)}/>
                 </div>
                <input type='button' className='BtnAdd' value='+ Add' onClick={suschiCart}/>
            </div>
            )}
            {menuItems.id === "m2" && (
                <div className="">
                <div className="inputItems"> 
                    <label for="amount_m2" className='font-bold'>Amount</label>
                    <input id="amount_m2" className='inputItems-count' type="number" min="1" max="5" value={Schnitzel} onChange={(e)=>setSchnitzel(e.target.value)}/>
                 </div>
                <input type='button' className='BtnAdd' value='+ Add' onClick={schnitzelCart}/>
            </div>
            )}
            {menuItems.id === "m3" && (
                <div className="">
                <div className="inputItems"> 
                    <label for="amount_m3" className='font-bold'>Amount</label>
                    <input id="amount_m3" className='inputItems-count' type="number" min="1" max="5" value={burger} onChange={(e)=>setBurger(e.target.value)}/>
                 </div>
                <input type='button' className='BtnAdd' value='+ Add' onClick={BurgerCart}/>
            </div>
            )}
            {menuItems.id === "m4" && (
                <div className="">
                <div className="inputItems"> 
                    <label for="amount_m4" className='font-bold'>Amount</label>
                    <input id="amount_m4" className='inputItems-count' type="number" min="1" max="5" value={bowl} onChange={(e)=>setBowl(e.target.value)}/>
                 </div>
                <input type='button' className='BtnAdd' value='+ Add' onClick={BowlCart}/>
            </div>
            )}
            
        </div>
      ))}
    </div> 
  )
}

// const Order = () => {
//   const { data: Data, error, isLoading, isSuccess, isError } = useGetDataQuery();

// //   useEffect(() => {
   
// //     refetch();
// //   }, []);
//     let dataContent
//   if (isLoading) {
//     dataContent = (

//             <span className="">Loading...</span>
          
//       )
//   }

//   else if (isError) {
//     dataContent = (
//         <div className="" role="alert">
//           {error}
//         </div>
//       )
//   }
//   else if (isSuccess) {
//     dataContent = Data.map((Items) => {
//         return <OrderData menuItems={Items} key={Items.id} />
//       })
//   }
//   else
//  { return <div>{dataContent}</div> ;}
// };
export default Order
