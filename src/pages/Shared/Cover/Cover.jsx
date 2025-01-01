import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="our menu"
            strength={-200}
        >
            Blur transition from min to max
            <div
                className="h-[600px]"
                >
                <div className="text-neutral-content">
                    <div className="max-w-lg flex items-center bg-black bg-opacity-60 flex-col justify-center px-10 py-6 mx-auto my-32 text-center">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;