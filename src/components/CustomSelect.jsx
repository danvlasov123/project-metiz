import React from "react";
import Select, { components } from "react-select";
import {
  addCategoriesSetting,
  addStockSetting,
  addGroupSetting,
  fetchGroups,
} from "../store/todoSlice";
function CustomSelect(props) {
  const fetchSetting = props.useSelector((state) => state.todos.fetchFilter);
  const filterFetchPriceList = (id, optionsName) => {
    let info;
    if (optionsName === "Категория:") {
      props.dispatch(addCategoriesSetting(`filter[categoryIds][]=${id}&`));
      props.dispatch(addGroupSetting(""));

      props.dispatch(
        props.fetch(
          (info = {
            categories: `filter[categoryIds][]=${id}&`,
            group: "",
            stock: fetchSetting.stock,
          })
        )
      );
      props.dispatch(fetchGroups(id));
    }
    if (optionsName === "Группа:") {
      props.dispatch(addGroupSetting(`filter[groupIds][]=${id}&`));
      props.dispatch(
        props.fetch(
          (info = {
            categories: fetchSetting.categories,
            group: `filter[groupIds][]=${id}&`,
            stock: fetchSetting.stock,
          })
        )
      );
    }
    if (optionsName === "Складской комплекс:") {
      props.dispatch(addStockSetting(`filter[stockIds][]=${id}&`));
      props.dispatch(
        props.fetch(
          (info = {
            categories: fetchSetting.categories,
            group: fetchSetting.group,
            stock: `filter[stockIds][]=${id}&`,
          })
        )
      );
    }
  };
  const customStyles = {
    menu: (provided, state) => ({
      width: "300px",
      border: "1px dotted pink",
      padding: "0px 0px",
      color: "#242424",
      position: "absolute",
      zIndex: 550,
      top: "100%",
      left: "0",
      background: "white",
      animation: "fadeIn 0.4s ease-in-out",
    }),

    option: () => ({
      padding: "10px 20px",
      transition: "all .4s",
      color: "#242424",
      cursor: "pointer",
      "&:hover": {
        color: "white",
        backgroundColor: "#FF6A39",
      },
    }),

    control: () => ({
      color: "#242424",
      width: "300px",
      marginTop: "6px",
      background: "#ffffff",
      border: "1px solid #e1e1e1",
      borderRadius: "2px",
      height: "47px",
      display: "flex",
      alignItems: "center",
      padding: "0 10px 0px 22px",
      position: "relative",
      transition: "all .4s",
      zIndex: 50,
      overflow: "hidden",
      div: {
        transition: "all .4s",
      },
      path: {
        transition: "all .4s",
      },
      "&:hover": {
        color: "white",
        backgroundColor: "#FF6A39",
        path: {
          fill: "white",
        },
        div: {
          color: "white",
        },
      },
      "@media (max-width: 400px)": {
        width: "100%",
      },
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    DropdownIndicator: () => ({
      cursor: "pointer",
    }),
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <span className="select_arrow">
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 7.5L0.870836 0.75L12.1292 0.749999L6.5 7.5Z"
              fill="#949494"
            />
          </svg>
        </span>
      </components.DropdownIndicator>
    );
  };
  return (
    <div className="select">
      <div className="select_label">{props.options.title}</div>
      <Select
        components={{ DropdownIndicator }}
        options={props.options.options}
        styles={customStyles}
        defaultValue
        onChange={(e) => filterFetchPriceList(e.id, props.options.title)}
        placeholder="Выбрать"
      />
    </div>
  );
}

export default CustomSelect;
