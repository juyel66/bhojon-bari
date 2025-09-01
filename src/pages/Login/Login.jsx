import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInWithGoogle } = useAuth(); // ✅ Google signin import
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error("Login Error:", err.message));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true }); // ✅ Google login শেষে redirect
      })
      .catch((err) => console.error("Google Login Error:", err.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm md:w-1/2 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="input w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>

            <input
              type="submit"
              value="Login"
              className="input bg-yellow-500 mt-4 text-white cursor-pointer"
            />

            {/* Google Sign-In Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-google mt-4 w-full bg-blue-500 text-white"
            >
              Sign in with Google
            </button>

            <Link
              to="/signUp"
              className="flex justify-center gap-0.5 mt-2"
            >
              No account? <p className="font-extrabold text-green-500">Sign Up</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
