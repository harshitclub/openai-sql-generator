import styles from "./styles.module.css";
import sqlServer from "./assets/sql-server.png";
import { useState } from "react";

export default function App() {
  const [queryDescription, setQueryDescription] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const query = await generateQuery();
    setSqlQuery(query);
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:4000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: queryDescription }),
    });

    const data = await response.json();
    return data.sqlQuery.trim();
  };
  return (
    <main className={styles.main}>
      <img src={sqlServer} className={styles.icon} />
      <h3>Generate Query of SQL</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="Describe Your Query"
          value={queryDescription}
          onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type="submit" value="Generate Query" />
      </form>
      <pre>{sqlQuery}</pre>
    </main>
  );
}
