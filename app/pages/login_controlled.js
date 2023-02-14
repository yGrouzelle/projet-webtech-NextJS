import Layout from "../Components/Layout.js";

import { useState } from "react";
import { fromJSON } from "postcss";

export default function loginControlled() {
  const [form, setForm] = useState({});
  const [show, setshow] = useState(false);
  console.log(form.username);
  return (
    <Layout>
      <div>
        <label>Unsername</label>
        <input
          type="text"
          value={form.username}
          onChange={(e) => {
            setForm({ ...form, ...{ username: e.target.value } });
          }}
        />
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, ...{ password: e.target.value } });
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            if (form.username && form.password) {
              setshow(!show);
            }
          }}
        >
          soummettre
        </button>
      </div>

      <div className={show ? "visible" : "hidden"}>
        <li>username : {form.username}</li>
        <li>password :{form.password}</li>
      </div>
    </Layout>
  );
}
