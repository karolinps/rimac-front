import instance from "@api/instance";

//Obtener user
export const getByUser = async (id) => {
  try {
    const response = await instance.get(`/users/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
