import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { name, recipe, price, image } = item;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = food => {
        if (user && user.email) {
            // Add to Cart
        }
        else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please LogIn before Adding Item to the Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 rounded-none shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="px-4 py-2 font-semibold rounded-none border-b-2 border-black hover:border hover:bg-black hover:text-yellow-300">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;