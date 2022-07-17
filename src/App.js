import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  // this is how i use costom hook
  const { loading, data } = useFetch();
  // contronls in whitch page we are
  const [page, setPage] = useState(0);
  // just holds data
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    // setisn "followers" to data of index "page"
    setFollowers(data[page]);
  }, [loading, page]);

  // this functions will change pages
  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination "}</h1>
        <div className="underline"></div>
      </div>
      <div className=" followers">
        <div className="container">
          {followers.map((item) => {
            return <Follower key={item.id} {...item} />;
          })}
        </div>
      </div>
      <div className="btn-container">
        <button onClick={prevPage} className="prev-btn">
          prev
        </button>
        {data.map((item, index) => {
          return (
            <button
              className={`page-btn ${index === page ? "active-btn" : null}`}
              key={index}
              // so when i click to any btn "handlePage" will run and inside "setPage" runs and sets "page" to "index". And we will jump to page  "index"
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button onClick={nextPage} className="next-btn">
          next
        </button>
      </div>
    </main>
  );
}

export default App;
