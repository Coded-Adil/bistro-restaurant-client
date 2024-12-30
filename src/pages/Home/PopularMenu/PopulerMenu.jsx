import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopulerMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setMenu(popularItem)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline text-black hover:text-white hover:bg-black rounded-none border-0 border-b">
                VIEW ALL MENU
            </button>
        </section>
    );
};

export default PopulerMenu;