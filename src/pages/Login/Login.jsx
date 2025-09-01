import { useContext, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react"; 
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);


const {singIn}=useContext(AuthContext);


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
singIn(email,password)

.then(result=>{
const user =result.user;
console.log(user);
})





  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        {/* Left Side */}
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="card bg-base-100 w-full max-w-sm md:w-1/2 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full pr-10"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                >
                  {showPassword ? (
                    <EyeOffIcon size={20} />
                  ) : (
                    <EyeIcon size={20} />
                  )}
                </button>
              </div>

              {/* Forgot Password */}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              {/* Submit */}
              <input
                className="input bg-yellow-500 mt-4 text-2xl font-semibold text-white cursor-pointer"
                type="submit"
                value="Login"
              />
   
         <Link className="flex justify-center-safe gap-0.5" to ="/singup">You have no Account ?? <p className=" font-extrabold   text-green-500">SingUp</p></Link>
      
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
