import { useEffect, useState } from "react";
import { fetchData } from "../api/api";

const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData(param).then((res) => {
      setList(res.data.results);
    });
  }, [param]);
  return (
    <>
      {list && (
        <div className="list bg-dark">
          <div className="row">
            <h2 className="text-white title">{title}</h2>
            <div className="col">
              <div className="row__posters">
                {list.map((items, id) => {
                  return <img
                      className="row__poster row__posterLarge"
                      src={`https://image.tmdb.org/t/p/original${items.poster_path}`}
                      key={id}
                      alt={items.title}
                    />
                })
                }

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
