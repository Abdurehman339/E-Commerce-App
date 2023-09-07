import { authReq } from "../Request";
import { addProduct } from "../Request";
import { loginFailure, loginSuccess, loginStart, logOut } from "./userSlice";
import { fetchingStart, Success, Failure } from "./productSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Login API Call Function
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await authReq.post("/login", {
      username: user.username,
      password: user.password,
    });
    localStorage.setItem("token", res.data.token);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Invalid Username or Password");
      dispatch(loginFailure());
    } else {
      toast.error("Something went wrong");
      dispatch(loginFailure());
    }
  }
};

//Logout API Call Function
export const logout = (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logOut());
};

//SignUp API Call Function
export const signUp = async (user) => {
  if (
    !user.username ||
    !user.email ||
    !user.password ||
    !user.confirmPassword
  ) {
    toast.error("Please fill the complete form !");
    return false;
  } else if (user.password == user.confirmPassword) {
    try {
      const res = await authReq.post("/register", {
        username: user.username,
        email: user.email,
        password: user.password,
      });
      if (res.data.alreadyExistedUsername && res.data.alreadyExistedEmail) {
        toast.error("Usersername and Email already exists !");
        return false;
      } else if (
        res.data.alreadyExistedUsername ||
        res.data.alreadyExistedEmail
      ) {
        res.data.alreadyExistedUsername
          ? toast.error("Usersername already exists !")
          : toast.error("Email already exists !");
        return false;
      } else {
        toast.success("Account has been created !");
        return true;
      }
    } catch (error) {
      toast.error("Something went wrong !");
      return false;
    }
  } else {
    toast.error("Passwords do not match !");
    return false;
  }
};

//Add Product API Call Function
export const AddProduct = async () => {
  try {
    // dispatch(fetchingStart())
    const res = await addProduct.post(
      "/addProduct",
      {
        title: "abc",
        desc: "abc",
        img: "abc",
        categories: ["abc"],
        size: "abc",
        color: "abc",
        price: 400,
      },
      {
        headers: {
          jwt: localStorage.getItem("token"),
        },
      }
    );
    res.status(200).json('Add Product Successfully')
    // dispatch(Success(res.data));
  } catch (error) {
    toast.error("Something went wrong");
    // dispatch(Failure());
  }
};

//Uploading Product Image
const uploadImage = async (formData)=>{
  try {
    const res = await addProduct.post('/uploadimage', formData)
  } catch (error) {
    console.log(error)
  }
}