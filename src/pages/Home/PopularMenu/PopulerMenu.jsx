import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopulerMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="w-full flex justify-center my-4">
                <button className="btn btn-outline text-black hover:text-white hover:bg-black rounded-none border-0 border-b">
                    VIEW ALL MENU
                </button>
            </div>
        </section>
    );
};

export default PopulerMenu;