import Image from "next/image";
import { FC } from "react";
import s from "./Table.module.scss";
import { TableRowProps } from "./table.types";
import Link from "next/link";

const TableRow: FC<TableRowProps> = ({ items, imageSrc, controls }) => {
  const handleClickRemove = () => {
    if (controls) {
      controls.handleRemove(items[0]);
    }
  };

  return (
    <tr className={s.tableRow}>
      {items.map((item, idx) => (
        <td className={s.tableRowItem} key={`${item}-${idx}`}>
          {item}
        </td>
      ))}

      <td className={s.tableRowItem}>
        <Image
          src={imageSrc}
          className="rounded-md shadow-md"
          height={100}
          width={100}
          alt="coffee"
        />
      </td>

      {controls && (
        <td className={s.controls}>
          <Link href={`/admin/edit/${items[0]}`} className={s.controlsEdit}>
            Edit
          </Link>

          <button onClick={handleClickRemove} className={s.controlsRemove}>
            Remove
          </button>
        </td>
      )}
    </tr>
  );
};

export default TableRow;
