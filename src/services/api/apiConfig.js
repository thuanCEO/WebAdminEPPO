import axiosClient from "./apiAxios";

export const apiAccounts = {
  //method: get
  getProfile: async () => {
    try {
      const response = await axiosClient.get("/profile");
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
  //method: post
  //method: put
};

export const apiProducts = {
  //method: get
  //method: post
  //method: put
};
