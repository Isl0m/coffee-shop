import { FC, memo } from "react";
import s from "./Table.module.scss";
import { TableHeadItemProps } from "./table.types";

const TableHeadItem: FC<TableHeadItemProps> = ({ item }) => {
  return (
    <th scope="col" className={s.tableHeadItem} title={String(item)}>
      {item}
    </th>
  );
};

export default memo(TableHeadItem);
