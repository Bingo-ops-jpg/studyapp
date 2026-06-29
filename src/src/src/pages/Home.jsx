import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function generate() {
    const arr = text.split("。").map((t, i) => ({
      id: i,
      q: "请理解：",
      a: t
    }));

    setList(arr);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>学习App</h2>

      <textarea
        style={{ width: 400, height: 200 }}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button onClick={generate}>
        生成题目
      </button>

      <hr />

      {list.map(item => (
        <div key={item.id}>
          <p>{item.q}</p>
          <b>{item.a}</b>
        </div>
      ))}
    </div>
  );
}
