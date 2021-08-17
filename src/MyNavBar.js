
import './BabyNavigator';
import DrKatherineNasa from './katherine-johnson-nasa-sw-engineer-in-1966-.jpg';
import BabyNavigator from "./BabyNavigator";
// import './MyNavBar.css';

function MyNavBar() {
    return (
        <div className="MyNavBar">

                <img src={DrKatherineNasa} className="" alt="logo" />
            <div>
                <p className="text-6xl">
                 Women - the original software engineers.
                </p>
                <BabyNavigator />
            </div>
        </div>
    );
}

export default MyNavBar;
