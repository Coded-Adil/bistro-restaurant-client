import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg'
import PopulerMenu from '../../Home/PopularMenu/PopulerMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" />
            <PopulerMenu />
            <PopulerMenu />
            <PopulerMenu />
        </div>
    );
};

export default Menu;