import React, { useState } from "react";
import s from "./SitebarMenu.module.scss";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

function SitebarMenu() {
  const spisok = [
    {
      title: "Трубы",
      submenu: ["Трубы ВГП", "Трубы ЭСПШ", "Трубы профильные"],
    },
    {
      title: "Лист",
      submenu: [
        "горячекатаный",
        "холоднокатаный",
        "оцинкованный",
        "профнастил",
      ],
    },
    {
      title: "Арматура",
      submenu: ["Трубы ВГП", "Трубы ЭСПШ", "Трубы профильные"],
    },
    {
      title: "Фасон",
      submenu: ["Трубы ВГП", "Трубы ЭСПШ", "Трубы профильные"],
    },
    {
      title: "Сорт",
      submenu: ["Трубы ВГП", "Трубы ЭСПШ", "Трубы профильные"],
    },
    {
      title: "Сварочные материалы",
      submenu: ["Трубы ВГП", "Трубы ЭСПШ", "Трубы профильные"],
    },
    {
      title: "Метизы",
      submenu: ["Трубы ВГП", "Трубы ЭСПШ", "Трубы профильные"],
    },
    {
      title: "Сетка сварная",
      submenu: ["Трубы ВГП", "Трубы ЭСПШ", "Трубы профильные"],
    },
  ];
  const [selectedId, setSelectedId] = useState();

  return (
    <div className={s.sitebar_menu}>
      <h2 className={s.sitebar_menu_title}>
        <span>Каталог продукции</span>
      </h2>
      <div className={s.sitebar_menu_wrapper}>
        <Accordion
          onChange={([selectedId]) => setSelectedId(selectedId)}
          allowZeroExpanded
        >
          {spisok.map((item, idx) => (
            <AccordionItem
              uuid={idx}
              key={idx}
              className={`${s.sitebar_menu_wrapper_list} 
              ${idx === selectedId ? s.active : ""}`}
            >
              <AccordionItemHeading>
                <AccordionItemButton className={s.sitebar_menu_wrapper_btn}>
                  {item.title}
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel className={s.sitebar_menu_wrapper_submenu}>
                <ul>
                  {item.submenu.map((list, idx) => (
                    <li key={idx}>
                      <a href="/">{list}</a>
                    </li>
                  ))}
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <a href="/" className={s.sitebar_menu_next}>
        <span>
          Перейти <br /> в прайс-лист
        </span>
      </a>
    </div>
  );
}

export default SitebarMenu;
