
const FoodCard = ({item}) => {
    const { name, recipe, price, image } = item;

    const handleAddToCart = food => {
        console.log(food);
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