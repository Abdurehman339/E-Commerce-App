import { authReq } from "../Request";
import { addProduct } from "../Request";
import { fetchProduct } from "../Request";
import { cart } from "../Request";
import { loginFailure, loginSuccess, loginStart, logOut } from "./userSlice";
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
export const AddProduct = async (dispatch, product) => {
  try {
    const res = await addProduct.post(
      "/addproduct",
      {
        title: product.title,
        desc: product.description,
        img: product.image,
        categories: product.category,
        size: product.size,
        color: product.color,
        price: product.price,
        inStock: product.inStock,
      },
      {
        headers: {
          jwt: localStorage.getItem("token"),
        },
      }
    );
    const result = await res.json();
  } catch (error) {
    toast.error("Something went wrong");
  }
};

//Uploading Product Image
export const uploadImage = async (formData) => {
  try {
    const res = await addProduct.post("/uploadimage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//Fetching All Products
export const fetchProducts = async () => {
  try {
    const res = await fetchProduct.get("/fetchProduct", {
      headers: {
        jwt: localStorage.getItem("token"),
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//Fetching Cart Data
export const manageCart = async (user) => {
  try {
    const res = await cart.post(
      "/fetchcart",
      {
        userid: user._id
      },
      {
        headers: {
          jwt: localStorage.getItem("token"),
        },
      }
    );
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};

//Fetching Single Product
export const fetchSingleProduct = async (id) => {
  try {
    const res = await fetchProduct.get(
      `/fetchsingleproduct/${id}`,
      {
        headers: {
          jwt: localStorage.getItem("token"),
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const AddtoCart = async (user, productid, qty) => {
  try {
    const res = await cart.post('/addtocart',{
      userid: user._id,
      productid: productid,
      qty: qty
    },{
      headers: {
        jwt: localStorage.getItem('token')
      }
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const RemovefromCart = async (user, productid) => {
  try {
    const res = await cart.post('/removefromcart',{
      userid: user._id,
      productid: productid
    },{
      headers: {
        jwt: localStorage.getItem('token')
      }
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}