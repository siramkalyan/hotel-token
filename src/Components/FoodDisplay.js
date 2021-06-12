import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import Idli from "./idli.jpg"
import Add from "./add.jpg"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ls from 'local-storage';
import { useCookies } from 'react-cookie';
function FoodDisplay() {
    let textInput =React.createRef();
    const data =[  
         {"id" : 1,
         "name" : "idli",
         "price" : 30,
         "category" : "tiffin",
         "image" : "https://1.bp.blogspot.com/-Tdd21H9Ffjc/XYHIA2JjsZI/AAAAAAAA_yY/IatTqJJ1dv8p8jaOyPGu3UF2TRVKPIpywCLcBGAsYHQ/s1600/karnataka-style-idli-recipe.jpg"
         },
         {
             "id" : 2,
             "name" : "vada",
             "price" : 40,
             "category" : "tiffin",
             "image" : "https://image.shutterstock.com/image-photo/vada-medu-vadai-sambar-popular-260nw-400811605.jpg"
         },
         {
             "id" : 3,
             "name" : "puri",
             "price" : 40,
             "category" : "tiffin",
             "image" : "https://image.shutterstock.com/image-photo/puri-bhaji-poori-masalaaloo-sabzialoo-260nw-1397230967.jpg"
         },
         {
             "id" : 4,
             "name" : "uttpa",
             "price": "30",
             "category" : "tiffin",
             "image" : "https://image.shutterstock.com/image-photo/south-indian-food-uttapam-ooththappam-260nw-487469653.jpg"
         },
         {
            "id" : 5,
            "name" : "Fried Rice",
            "price": "10",
            "category" : "tiffin",
            "image" : "https://static.toiimg.com/thumb/75581339.cms?width=1200&height=900"
        }
    ];
    const [tiffin1,setTiffin]=useState([{}]);
    localStorage.setItem("tiffin_data",JSON.stringify([]));
    const [cookies, setCookie] = useCookies([{}]);
      
    const onClick1 = (e) =>
    {
        var newTiffin1=Object.assign([],tiffin1);
        newTiffin1.push(data[e.currentTarget.id-1]);
        setTiffin(newTiffin1);
        console.log("data current id",data[e.currentTarget.id-1])
        console.log("current target id",e.currentTarget.id);
        console.log("state",tiffin1);
        console.log( "cokkies data after clicking",cookies.tiffin_data);
    }
    const getStore = () =>
    {
        console.log("store click",{tiffin1});
        localStorage.setItem("tiffin_data",JSON.stringify(tiffin1));
        var storedNames = JSON.parse(localStorage.getItem("tiffin_data"));
        console.log("local storage",storedNames);
        setCookie('tiffin_data', storedNames, { path: '/' });
        console.log("local storage after cokkies",localStorage.getItem("tiffin_data"));
        console.log( "cokkies data",cookies.tiffin_data);
    }
    return (
        <div style={{paddingTop : "20vh"}}>
            {
                
                data.map((tiffin,index) =>
                {
                   // console.log(tiffin)
                    return(
                        <div key={index} class="w3-container" style={{paddingTop : "2vh" ,paddingRight : "2vw",paddingLeft : "2vw", display : 'flex' ,justifyContent : 'space-between', borderRadius : "2px",border: "2px solid black" ,width : "80vw",margin : "10px" }}>
                          <img src={tiffin.image} alt="idli" height="50px" width="50px"  />
                          <p ref={textInput} value={tiffin.name}style={{ fontSize : "20px" , fontWeight : "bold"}}>{tiffin.name}</p>
                          <p style={{  fontSize : "20px" , fontWeight : "bold"}}>{tiffin.price}</p>
                          <img src={Add} id={tiffin.id}alt="add" widht="50px" height="50px" style={{cursor : "pointer"}} value={tiffin.id.toString()}onClick={(e)=>onClick1(e,"value")}/>
                    </div>
                    );
                })
            } 
            <Store onClick={() => getStore()}/>
   </div>
  
    )
}

export default FoodDisplay

const Store=styled(ShoppingCartOutlinedIcon)`

        position : fixed;
        bottom : 0;
        right : 0;
        background : orange;
        padding-bottom : "15px:;
        margin-bottom : "15px";
        align-items : right;
`


