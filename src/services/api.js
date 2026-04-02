const API_URL = "https://back-end-1-drnh.onrender.com/api";

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

export const createProduct = async (data) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error("Produto não encontrado");
  }

  return res.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
};

export const getProfile = async () => {
  const res = await fetch(`${API_URL}/auth/me`, {
    credentials: "include",
  });

  return res.json();
};

export const updateProfile = async (data) => {
  const res = await fetch(`${API_URL}/user/me`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getUsers = async (search = "", page = 1) => {
  const res = await fetch(
    `${API_URL}/user/users?search=${encodeURIComponent(
      search,
    )}&page=${page}&limit=5`,
    {
      credentials: "include",
    },
  );

  return res.json();
};

export const toggleAdmin = async (id) => {
  const res = await fetch(`${API_URL}/user/users/${id}/admin`, {
    method: "PATCH",
    credentials: "include",
  });

  return res.json();
};

export const getKeys = async () => {
  const res = await fetch(`${API_URL}/keys`, {
    credentials: "include",
  });

  return res.json();
};

export const createKey = async (data) => {
  const res = await fetch(`${API_URL}/keys`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const toggleKey = async (id) => {
  await fetch(`${API_URL}/keys/${id}/toggle`, {
    method: "PATCH",
    credentials: "include",
  });
};

export const deleteKey = async (id) => {
  await fetch(`${API_URL}/keys/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
};
