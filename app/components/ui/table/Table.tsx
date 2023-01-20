import { FC, memo } from "react";
import TableHeadItem from "./TableHeadItem";
import TableRow from "./TableRow";
import s from "./Table.module.scss";
import { TableProps } from "./table.types";

const Table: FC<TableProps> = ({ theadData, tbodyData, controls }) => {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          {theadData.map((item, idx) => (
            <TableHeadItem item={item} key={idx} />
          ))}
          <TableHeadItem item="Image" />
          <TableHeadItem item="Controls" />
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item, idx) => (
          <TableRow {...item} controls={controls} key={idx} />
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
