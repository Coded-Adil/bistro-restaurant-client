import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }
    return (
        <div className='p-4 pb-8 mx-auto'>
            <button onClick={handleGoogleLogIn} className="btn btn-outline btn-neutral rounded-none">Google</button>
        </div>
    );
};

export default SocialLogin;