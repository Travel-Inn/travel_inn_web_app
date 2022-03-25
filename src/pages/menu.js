import "../styles/menu.css";
import breakfast from '../images/breakfast-foods.jpg' ;
import brunch from '../images/brunch.jpg';
import lunch from '../images/lunch.png' ;
import dinner from '../images/dinner.jpg' ;
import dessert from '../images/dessert.jpg' ;
import { Link } from "react-scroll/modules";

 export default function Menu() {
     const menuTabs = [
        {
            id: "breakfast",
            image: breakfast,
            name: "Breakfast"
        }, 
        {
            id: "brunch",
            image: brunch,
            name: "Brunch"
        }, 
        {
            id: "lunch",
            image: lunch,
            name: "Lunch"
        }, 
        {
            id: "dinner",
            image: dinner,
            name: "Dinner"
        }, 
        {
            id: "dessert",
            image: dessert,
            name: "Dessert"
        }
     ]
  return (
    <div className="menuContent">
        <div className="menuPageInfo">
        <h1>Menu</h1>
        </div>
        <div className="menuList">
            <div className ="menuTabs">
                {
                    menuTabs.map((menuTab)=>(
                        <Link activeClass="active" to={menuTab.id} spy={true} smooth={true}><div className="menuTab" key={menuTab.id}>
                            <img src={menuTab.image} width="150px" height="150px" className="menuTabImage" alt="#"/>
                            <h4>{menuTab.name}</h4>
                        </div></Link>
                    ))
                }
            </div>
            <div className="menuContainer">
                <div className="menuName" id="breakfast">
                    <h1>BreakFast</h1>
                </div>
                <div className="menuItems">
                    <h2>BEVERAGES</h2>
                    <table>
                        <tr>
                            <td>Orange Juice</td><td>GHS 6.00</td>
                        </tr>
                        <tr>
                            <td>Iced Tea</td><td>GHS 8.00</td>
                        </tr>
                    </table>
                    <h2>FOOD</h2>
                    <table>
                        <tr>
                            <td>SALAD</td><td>GHS 15.00</td>
                        </tr>
                        <tr>
                            <td>PANCAKES</td><td>GHS 12.00</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className="menuContainer">
                <div className="menuName" id="brunch">
                    <h1>Brunch</h1>
                </div>
                <div className="menuItems">
                    <h2>BEVERAGES</h2>
                    <table>
                        <tr>
                            <td>Orange Juice</td><td>GHS 6.00</td>
                        </tr>
                        <tr>
                            <td>Iced Tea</td><td>GHS 8.00</td>
                        </tr>
                    </table>
                    <h2>FOOD</h2>
                    <table>
                        <tr>
                            <td>SALAD</td><td>GHS 15.00</td>
                        </tr>
                        <tr>
                            <td>PANCAKES</td><td>GHS 12.00</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}