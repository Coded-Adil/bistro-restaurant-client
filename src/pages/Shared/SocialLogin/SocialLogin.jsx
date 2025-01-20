import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();

    const handleGoogleLogIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
    }
    return (
        <div className='p-4 pb-8 mx-auto'>
            <button onClick={handleGoogleLogIn} className="btn btn-outline btn-neutral rounded-none">Google</button>
        </div>
    );
};

export default SocialLogin;