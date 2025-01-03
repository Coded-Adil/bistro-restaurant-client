import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="py-8">
            {title && <Cover img={coverImg} title={title} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className="w-full flex justify-center my-4">
                <button className="btn btn-outline text-black hover:text-white hover:bg-black rounded-none border-0 border-b">
                    VIEW ALL MENU
                </button>
            </Link>
        </div>
    );
};

export default MenuCategory;