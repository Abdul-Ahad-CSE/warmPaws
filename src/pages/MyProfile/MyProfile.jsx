import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";

export default function MyProfile() {
  const { user } = use(AuthContext);
  return <div>{user && user.email} {user && user.name}</div>;
}
