const apiUrl = process.env.REACT_APP_BACKEND;

const requestMethods = {
  post: "POST",
  get: "GET",
  put: "PUT",
  delete: "DELETE",
};

const endpoints = {
  accuntsEnpoint: "/accounts",
  authEnpoint: "/auth",
  userEnpoint: "/users",
  updateUserInfoEnpoint: "/users/update/info",
  updateUserAvatarEnpoint: "/users/update/avatar",
  updateUserStatusEnpoint: "/users/update/status",
  productsEnpoint: "/products",
  likeEndpoint: "/likes",
  locationEndpoint: "/products/filterBy/location",
  addProductEndpoint: "/products/add",
  updateProductImageEndpoint: "/products/update/image",
  updateProductInfoEndpoint: "/products/update/info",
  setVoteEndpoint: "/users/score/",
};
const selectHeaders = (value, token) => {
  const contentHeaders = {
    json: {
      "Content-Type": "application/json",
    },
    auth: {
      Authorization: `Bearer ${token}`,
    },
  };
  switch (value) {
    case "json":
      return contentHeaders.json;
    case "auth":
      return contentHeaders.auth;
    case "form-data":
      return contentHeaders.formData;
    default:
  }
  return contentHeaders;
};

export const registerUserService = async (body) => {
  const response = await fetch(`${apiUrl}${endpoints.accuntsEnpoint}`, {
    method: requestMethods.post,
    headers: selectHeaders("json"),
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (data.status) {
    throw new Error(data.message);
  }

  return data.message;
};

export const loginUserService = async (body) => {
  const response = await fetch(`${apiUrl}${endpoints.authEnpoint}`, {
    method: requestMethods.post,
    headers: selectHeaders("json"),
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (data.status !== "ok") {
    throw new Error(data.message);
  }

  return data.data;
};

export const updateUserInfoService = async (body, token) => {
  const response = await fetch(`${apiUrl}${endpoints.updateUserInfoEnpoint}`, {
    method: requestMethods.put,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const updateUserAvatarService = async (body, token) => {
  const response = await fetch(
    `${apiUrl}${endpoints.updateUserAvatarEnpoint}`,
    {
      method: requestMethods.put,
      body: body,
      headers: selectHeaders("auth", token),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getUserMyDataService = async (token) => {
  const response = await fetch(`${apiUrl}${endpoints.userEnpoint}`, {
    method: requestMethods.get,
    headers: selectHeaders("auth", token),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.data;
};

export const AddNewProductService = async (body, token) => {
  const response = await fetch(`${apiUrl}${endpoints.addProductEndpoint}`, {
    method: requestMethods.post,
    body,
    headers: selectHeaders("auth", token),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getBuyProductsService = async (path, token) => {
  const response = await fetch(`${apiUrl}${path}`, {
    method: requestMethods.get,
    headers: selectHeaders("auth", token),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const confirmBuyProdutService = async ({ token, body, path }) => {
  const response = await fetch(`${apiUrl}${path}`, {
    method: requestMethods.post,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getProductsService = async (path, token) => {
  if (path.includes("likes/filterBy/loverId")) {
    const response = await fetch(`${apiUrl}${path}`, {
      method: requestMethods.get,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (data.status) {
      throw new Error(data.message);
    }

    return data;
  } else {
    const response = await fetch(`${apiUrl}${path}`, {
      method: requestMethods.get,
      headers: selectHeaders("json"),
    });

    const data = await response.json();

    if (data.status) {
      throw new Error(data.message);
    }

    return data;
  }

  /* const response = await fetch(`${apiUrl}${path}`, {
    method: requestMethods.get,
    headers: selectHeaders("json"),
  });

  const data = await response.json();

  if (data.status) {
    throw new Error(data.message);
  }

  return data; */
};

export const getTotalsProductsService = async (search) => {
  const response = await fetch(
    `${apiUrl}${endpoints.productsEnpoint}/totals/search/:${search}`,
    {
      method: requestMethods.get,
      headers: selectHeaders("json"),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const deleteProductService = async (productId, token) => {
  const response = await fetch(
    `${apiUrl}${endpoints.productsEnpoint}/delete/byId/${productId}`,
    {
      method: requestMethods.delete,
      headers: selectHeaders("auth", token),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const updateProductImageService = async (body, token, id, userId) => {
  const response = await fetch(
    `${apiUrl}${endpoints.updateProductImageEndpoint}/${id}/${userId}`,
    {
      method: requestMethods.put,
      body: body,
      headers: selectHeaders("auth", token),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const updateProductInfoService = async (body, token, id) => {
  const response = await fetch(
    `${apiUrl}${endpoints.updateProductInfoEndpoint}/${id}`,
    {
      method: requestMethods.put,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getLocationService = async () => {
  const response = await fetch(`${apiUrl}${endpoints.locationEndpoint}`, {
    method: requestMethods.get,
    headers: selectHeaders("json"),
  });

  const data = await response.json();

  if (data.status) {
    throw new Error(data.message);
  }

  return data;
};

export const getUserService = async (id) => {
  const response = await fetch(
    `${apiUrl}${endpoints.userEnpoint}/filterBy/id/${id}`,
    {
      method: requestMethods.get,
      headers: selectHeaders("json"),
    }
  );

  const data = await response.json();

  return data;
};

export const setVoteService = async (path, token) => {
  const response = await fetch(`${apiUrl}${endpoints.setVoteEndpoint}${path}`, {
    method: requestMethods.put,
    headers: selectHeaders("auth", token),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getLikeProductIdService = async (product_id, lover_id) => {
  const response = await fetch(
    `${apiUrl}${endpoints.likeEndpoint}/filterBy/productId/${product_id}?lover_id=${lover_id}`,
    {
      method: requestMethods.get,
      headers: selectHeaders("json"),
    }
  );
  const data = await response.json();

  //Si no hay response isLiked = false y si hay response isLiked = true
  let isLiked;
  data.object ? (isLiked = true) : (isLiked = false);

  return isLiked;
};

export const postLikeService = async (productId, token) => {
  const response = await fetch(
    `${apiUrl}${endpoints.likeEndpoint}/${productId}`,
    {
      method: requestMethods.post,
      headers: selectHeaders("auth", token),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const deleteLikeService = async (productId, token) => {
  const response = await fetch(
    `${apiUrl}${endpoints.likeEndpoint}/delete/byProductId/${productId}`,
    {
      method: requestMethods.delete,
      headers: selectHeaders("auth", token),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getCategoriesService = async () => {
  const response = await fetch(
    `${apiUrl}/products/filterBy/rankingCategories`,
    {
      method: requestMethods.get,
      headers: selectHeaders("json"),
    }
  );

  const data = await response.json();

  if (data.status) {
    throw new Error(data.message);
  }

  return data;
};

export const getValidateAccountService = async (path) => {
  const response = await fetch(`${apiUrl}${path}`, {
    method: requestMethods.get,
  });

  const data = await response.json();

  if (data.status !== "created") {
    throw new Error(data.message);
  }

  return data;
};
