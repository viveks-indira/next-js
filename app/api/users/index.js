export async function Get(res) {
    try {
       // If userId is not provided, retrieve all users
        const users = await UserModel.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  