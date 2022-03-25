import "../styles/menu.css";
import breakfast from '../images/breakfast-foods.jpg' ;
import brunch from '../images/brunch.jpg';
import lunch from '../images/lunch.png' ;
import dinner from '../images/dinner.jpg' ;
import dessert from '../images/dessert.jpg' ;

 export default function Menu() {
     const menuTabs = [
        breakfast, brunch, lunch, dinner, dessert
     ]
  return (
    <div className="menuContent">
        <div className="menuPageInfo">
        <h1>Menu</h1>
        </div>
        <div className="menuList">
            <div className ="menuTabs">
                {
                    menuTabs.map((menuTab,pos)=>(
                        <div className="menuTab" key={pos}>
                            <img src={menuTab} width="150px" height="150px" className="menuTabImage"/>
                            <h4>Breakfast</h4>
                        </div>
                    ))
                }
            </div>
            <div className="menuContainer">
                <div className="menuName">
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
        </div>
    </div>
  );
}