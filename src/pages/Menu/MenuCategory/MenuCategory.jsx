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
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black rounded-none border-0 border-b">
                    Order Now
                </button>
            </Link>
        </div>
    );
};

export default MenuCategory;