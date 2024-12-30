import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";

const Feature = () => {
    return (
        <div
            style={{ backgroundImage: `url(${featureImg})` }}
            className="bg-cover bg-center bg-no-repeat relative py-20 my-20"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center text-white">
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"Featured Item"}
                />
                <div className="md:flex justify-center items-center py-8 px-8 md:px-16">
                    <div className="md:w-1/2">
                        <img
                            src={featureImg}
                            alt="Featured Item"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:ml-10 mt-6 md:mt-0">
                        <p className="mb-2">Aug 20, 2029</p>
                        <p className="uppercase font-semibold mb-4">
                            WHERE CAN I GET SOME?
                        </p>
                        <p className="text-sm leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt
                            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore
                            consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black rounded-none border-0 border-b">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;