import { StrOrNum } from "@shared/types/main.types";
type Controls = {
  handleRemove: (id: any) => void;
  // handleEdit: (id: any) => void;
};
export type TableHeadItemProps = {
  item: StrOrNum;
};

export type TableRowProps = {
  items: StrOrNum[];
  imageSrc: string;
  controls?: Controls;
};

export type TableProps = {
  theadData: StrOrNum[];
  tbodyData: Pick<TableRowProps, "items" | "imageSrc">[];
  controls?: Controls;
};
