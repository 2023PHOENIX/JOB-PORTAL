import React, { useContext, useEffect } from "react";
import style from "./job.filter.module.css";
import SearchIcon from "../../assets/searchIcon.svg";
import CrossIcon from "../../assets/cross.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { searchJobContext } from "../../context/SearchJobProvider";
function JobFilter(props) {
  const [selectedList, setSelectedList] = useState([]);
  const [searchItem, setSearchedItem] = useState("");
  const navigate = useNavigate();
  const { setJobListKey } = useContext(searchJobContext);
  useEffect(() => {
    setJobListKey(selectedList); 
    
  }, [selectedList]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSelectedList((prev) => [...prev, searchItem.trim()]);
      setSearchedItem("");
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.searchJob}>
        <div className={style.searchIcon}>
          <img src={SearchIcon} />
        </div>
        <input
          className={style.inputSearch}
          name="search"
          value={searchItem}
          onChange={(e) => setSearchedItem(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type any job title"
        />
      </div>
      <div className={style.customSelect}>
        <select className={style.pickerType}>
          <option value="skills">Skills </option>
          <option value="skills">Skills </option>
        </select>

        <div className={style.picked}>
          {selectedList?.map((s, i) => (
            <div className={style.pickedItem} key={i}>
              <p>{s}</p>
              <div>
                <img
                  src={CrossIcon}
                  alt="#"
                  onClick={() => {
                    setSelectedList((prev) => {
                      const newItem = [...prev];
                      newItem.splice(i, 1);
                      return newItem;
                    });
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className={style.addJob}
          onClick={() => {
            navigate("/addJob");
          }}
        >
          {" "}
          + Add Job
        </div>
      </div>
    </div>
  );
}

export default JobFilter;
