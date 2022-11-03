import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { createNewUserWithEmailAndPassword, createUserDocFromAuth } from "../../firebase/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password didn't match");
      return;
    }
    try {
      const { user } = await createNewUserWithEmailAndPassword(email, password);

      setCurrentUser(user);

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    }

    catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('E-mail ID already in use!');
      }
      console.log('Error:', error)
    }
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-full text-gray-800 antialiased px-4 py-20 flex flex-col justify-center box-border">
      <h1 className="text-2xl text-center font-bold">Sign up here</h1>
      <form className="py-2 px-4" onSubmit={(handleSubmit)}>
        <label className="block font-semibold py-5">Display Name</label>
        <input
          className="border-b-2 bg-gray-50 border-gray-400 w-full h-10 rounded-md"
          type="text"
          placeholder="Display Name"
          onChange={handleTextChange}
          name="displayName"
          value={displayName}
          required
        />

        <label className="block font-semibold py-5">Email ID</label>
        <input
          className="border-b-2 bg-gray-50 border-gray-400 w-full h-10 rounded-md"
          type="email"
          placeholder="Enter your e-mail"
          onChange={handleTextChange}
          name="email"
          value={email}
          required
        />

        <label className="block font-semibold py-5">Password</label>
        <input
          className="border-b-2 bg-gray-50 border-gray-400 w-full h-10 rounded-md"
          type="password"
          placeholder="Enter Password"
          onChange={handleTextChange}
          name="password"
          value={password}
          required
        />

        <label className="block font-semibold py-5">Confirm Password</label>
        <input
          className="border-b-2 bg-gray-50 border-gray-400 w-full h-10 rounded-md"
          type="password"
          placeholder="Confirm Password"
          onChange={handleTextChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <div className="py-6 w-full">
        <button className="block w-full h-10 bg-black font-semibold text-white rounded-md" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
