import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSocialLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('https://bistro-boss-server-tau-dusky.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, {replace: true})
                    })
            })
    }

    return (
        <div>
            <div className="divider w-4/5 mx-auto">Or sign in with</div>
            <div className="text-center">
                <button onClick={handleSocialLogin} className="btn btn-circle btn-outline">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;