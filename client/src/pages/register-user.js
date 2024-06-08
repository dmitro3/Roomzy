import React, { useState } from "react";

import { Button } from "@nextui-org/react"; 
import {useNavigate} from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    gender: "MALE",
    mobileVisibility: true,
    whoYouAre: "NEED ROOM WITH ROOMMATE",
    avatar: 1,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const transformedData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        full_name: formData.fullName,
        mobile_number: formData.mobile,
        mobile_visibility: formData.mobileVisibility,
        gender: formData.gender,
        date_of_birth: formData.dateOfBirth,
        profile_picture_url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekcrL1wdy13S8K9V7nqZ1UYhlAJzNsz1ilyH02U9dSw&s`,
      };
      console.log(transformedData);
      const response = await fetch(
        "http://localhost:4000/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transformedData),
        }
      );

      if (response.ok) {
        alert("User registered successfully");
       if (formData.whoYouAre === "NEED ROOM WITH ROOMMATE") {
         navigate("/generate-list");
       } else if (formData.whoYouAre === "NEED ROOMMATE FOR ROOM") {
         navigate("/add-room-avail");
       }

        setFormData({
          fullName: "",
          username: "",
          email: "",
          mobile: "",
          dateOfBirth: "",
          gender: "",
          mobileVisibility: "",
          avatar: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert("Error registering User.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="review_div">
        
        <form onSubmit={handleSubmit}>
          <div
            style={{ border: "3px solid #1a202c" }}
            className="sm:w-[38rem] shadow-[0px_8px_0px_0px_#1a202c] w-[95%] mx-auto my-4 overflow-hidden rounded-2xl bg-white sm:max-w-lg"
          >
            <div className="px-10 py-10 text-center text-black">
              <p className="uppercase text-2xl font-semibold">
                You are almost done
              </p>
              <p className="text-xs text-center uppercase mt-2">
                Please fill in the details to register
              </p>
            </div>

            <div className="space-y-4 px-8 py-4">
              <label className="block" htmlFor="name">
                <p className="text-gray-600">Full Name</p>
                <input
                  className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                  type="text"
                  placeholder="Rakesh Roushan"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </label>

              <label className="block" htmlFor="username">
                <p className="text-gray-600">Telegram Username</p>
                <input
                  className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                  type="text"
                  placeholder="@roushan_23"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>

              <label className="block" htmlFor="email">
                <p className="text-gray-600">Email</p>
                <input
                  className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                  type="text"
                  placeholder="rakeshroushan2341@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              <label className="block" htmlFor="mobile">
                <p className="text-gray-600">Mobile Number</p>
                <input
                  className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                  type="text"
                  placeholder="7890567344"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </label>

              <label className="block" htmlFor="dateOfBirth">
                <p className="text-gray-600">Date Of Birth</p>
                <input
                  className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </label>

              <div className="space-y-4">
                <p className="text-gray-600 mt-3">Gender</p>
                <div className="grid sm:grid-cols-2 grid-cols-2 gap-2">
                  <div className="relative flex md:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                    <input
                      className="peer hidden"
                      type="radio"
                      name="gender"
                      id="genderMale"
                      value="MALE"
                      checked={formData.gender === "MALE"}
                      onChange={handleChange}
                    />
                    <label
                      className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                      htmlFor="genderMale"
                    ></label>
                    <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                    <span>MALE</span>
                  </div>
                  <div className="relative flex sm:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                    <input
                      className="peer hidden"
                      type="radio"
                      name="gender"
                      id="genderFemale"
                      value="FEMALE"
                      checked={formData.gender === "FEMALE"}
                      onChange={handleChange}
                    />
                    <label
                      className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                      htmlFor="genderFemale"
                    ></label>
                    <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-sky-500 ring-offset-2"></div>
                    <span className="mx-4">FEMALE</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">Who you are *</p>
                <div className="grid sm:grid-cols-1 grid-cols-1 gap-2">
                  <div className="relative flex md:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                    <input
                      className="peer hidden"
                      type="radio"
                      name="whoYouAre"
                      id="whoYouAre1"
                      value="NEED ROOM WITH ROOMMATE"
                      checked={formData.whoYouAre === "NEED ROOM WITH ROOMMATE"}
                      onChange={handleChange}
                    />
                    <label
                      className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                      htmlFor="whoYouAre1"
                    ></label>
                    <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                    <span>LOOKING FOR ROOM</span>
                  </div>
                  <div className="relative flex sm:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                    <input
                      className="peer hidden"
                      type="radio"
                      name="whoYouAre"
                      id="whoYouAre2"
                      value="NEED ROOMMATE FOR ROOM"
                      checked={formData.whoYouAre === "NEED ROOMMATE FOR ROOM"}
                      onChange={handleChange}
                    />
                    <label
                      className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                      htmlFor="whoYouAre2"
                    ></label>
                    <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                    <span className="mx-4">LOOKING FOR ROOMMATE</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  Do you want to make your mobile number visible to others
                </p>

                <div className="relative flex md:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  <input
                    className="peer hidden"
                    type="radio"
                    name="mobileVisibility"
                    id="mobileVisibilityYes"
                    value={true}
                    checked={formData.mobileVisibility === true}
                    onChange={() =>
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        mobileVisibility: true,
                      }))
                    }
                  />
                  <label
                    className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                    htmlFor="mobileVisibilityYes"
                  ></label>
                  <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                  <span>YES MAKE IT PUBLIC</span>
                </div>

                <div className="relative flex sm:w-36 w-full items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  <input
                    className="peer hidden"
                    type="radio"
                    name="mobileVisibility"
                    id="mobileVisibilityNo"
                    value={false}
                    checked={formData.mobileVisibility === false}
                    onChange={() =>
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        mobileVisibility: false,
                      }))
                    }
                  />
                  <label
                    className="peer-checked:border-[#FE797A] absolute top-0 h-full w-full cursor-pointer rounded-full border"
                    htmlFor="mobileVisibilityNo"
                  ></label>
                  <div className="peer-checked:border-transparent peer-checked:bg-[#FE797A] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-orange-600 ring-offset-2"></div>
                  <span className="mx-4">NO MAKE IT PRIVATE</span>
                </div>
                <p className="text-xs mt-3">
                  NOTE* : If your phone number is private others can contact you
                  through telegram
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-gray-600">Choose your Avatar</p>

                <div className="grid sm:grid-cols-4 grid-cols-3 gap-4">
                  {[1, 2, 4, 5, 6, 7, 8, 9].map((ele, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-center items-center"
                    >
                      <div className="relative overflow-hidden flex border rounded-full items-center justify-center w-20 h-20 bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        <input
                          className="peer hidden"
                          type="radio"
                          name="avatar"
                          id={`avatar${ele}`}
                          value={ele}
                          checked={formData.avatar == ele}
                          onChange={handleChange}
                        />
                        <label
                          className="peer-checked:border-[#FE797A] peer-checked:border-2 absolute top-0 h-full w-full cursor-pointer rounded-full border"
                          htmlFor={`avatar${ele}`}
                        ></label>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekcrL1wdy13S8K9V7nqZ1UYhlAJzNsz1ilyH02U9dSw&s" />
                      </div>
                      <span className="font-bold text-xs mt-2">{ele}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block" htmlFor="password">
                  <p className="text-gray-600">Password</p>
                  <input
                    className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </label>

                <label className="block" htmlFor="confirmPassword">
                  <p className="text-gray-600">Confirm Password</p>
                  <input
                    className="w-full mt-2 rounded-md border bg-white px-2 py-3 outline-none ring-[#FE797A] focus:ring-1"
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <Button
                style={{
                  border: "1px solid #1a202c",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
                variant="bordered"
                className="shadow-[0px_3px_0px_0px_#1a202c] w-full py-3 mt-8 uppercase"
                type="submit"
              >
                Register Your Self
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterUser;
