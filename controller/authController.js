const User = require("../models/Signup"); // Adjust the path to the userModel file

// Controller function for user signup
// const signup = async (req, res) => {
//   const { username, email, name, password } = req.body;

//   try {
//     // Check if user with the same username or email already exists
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res
//         .status(409)
//         .json({ message: "Username or email already in use", success: false });
//     }

//     // Create a new user
//     const newUser = new User({ username, email, name, password });
//     await newUser.save();

//     res.status(201).json({ message: "User created successfully", success: true  });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ message: "Internal server error", success: false  });
//   }
// };

// Controller function for user login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    // Check password
    if (user.password !== password) {
      return res
        .status(401)
        .json({ message: "Incorrect password", success: false });
    }

    res.status(200).json({ message: "Login successful", user, success: false });
  } catch (error) {
    console.error("Error during login:", error.data);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};



const getUser = async (req, res) => {

  try {
    const user = await User.findOne({ email: 'admin@noblebridgetechnologies.com' });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Try Again", success: false });
    }

      res.status(200).json({ message: "User Get successful", user, success: true });

  } catch (error) {
    console.error("Error during login:", error.data);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};


const resetPassword = async (req, res) => {
  const { prevPassword, newPassword } = req.body;


  try {
    // Find user by email

    if (prevPassword === newPassword) {
      return res
        .status(201)
        .json({ message: "New Password should be different from Current!", success: false });
    }

    const user = await User.findOne({ password: prevPassword });
    // console.log(user);
    if (!user) {
      return res
        .status(201)
        .json({ message: "Previous password is incorrect", success: false });
    }
    else{

    // const user = await User.findOne({ email: 'admin@noblebridgetechnologies.com' });
      
      // Check password
      user.password = newPassword
      const Updateduser = await User.findOneAndUpdate(
        { email: 'admin@noblebridgetechnologies.com' },
        {
          $set:{
            ...user
          }
        },
        { new: true }
        );
        
        if (Updateduser) {
          res.status(200).json({ message: "Password Update successful", user, success: true });
        }
      }
        
  } catch (error) {
    console.error("Error during login:", error.data);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  // signup,
  login,
  resetPassword,
  getUser
};
