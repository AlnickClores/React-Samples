import React, { useState } from "react";

const Form = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      className="flex flex-col gap-3 p-4 border rounded-lg bg-slate-500"
      onSubmit={props.handleSubmit}
    >
      <h1>Sample Form</h1>
      <input
        className="p-2 border rounded"
        type="text"
        placeholder="Username"
        onChange={props.handleChange}
        name="username"
      />
      <div className="flex w-full">
        <input
          className="flex-1 p-2 border rounded "
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={props.handleChange}
          name="password"
        />
        <button
          className="bg-green-500 p-2 font-semibold rounded ml-2 hover:bg-green-800"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
