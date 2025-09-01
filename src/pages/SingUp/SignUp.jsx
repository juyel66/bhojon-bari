import { useContext, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react"; 
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createuser } = useContext(AuthContext);

  const handleSign = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createuser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User Created:", user);
        // 👉 here you can update user profile with name & photo later
      })
      .catch((error) => {
        console.error("Signup Error:", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        {/* Left Side */}
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Create your Bhojon Bari account to continue.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="card bg-base-100 w-full max-w-sm md:w-1/2 shadow-2xl">
          <form onSubmit={handleSign} className="card-body">
            <fieldset className="fieldset">
              
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
                required
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="Profile Photo URL"
                required
              />

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
                value="Sign Up"
              />

              <Link
                className="flex justify-center gap-0.5 mt-2"
                to="/login"
              >
                Already have an account?
                <p className="font-extrabold text-green-500">Login</p>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
