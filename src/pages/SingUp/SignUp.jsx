import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSign = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password, name, photo)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error("Signup Error:", err.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm md:w-1/2 shadow-2xl">
          <form onSubmit={handleSign} className="card-body">
            <input type="text" name="name" placeholder="Name" required className="input"/>
            <input type="url" name="photo" placeholder="Photo URL" required className="input"/>
            <input type="email" name="email" placeholder="Email" required className="input"/>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" required className="input w-full pr-10"/>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-2 flex items-center text-gray-600">
                {showPassword ? <EyeOffIcon size={20}/> : <EyeIcon size={20}/>}
              </button>
            </div>
            <input type="submit" value="Sign Up" className="input bg-yellow-500 mt-4 text-white cursor-pointer"/>
            <Link to="/login" className="flex justify-center gap-0.5 mt-2">Already have account? <p className="font-extrabold text-green-500">Login</p></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
