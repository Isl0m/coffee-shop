import { CoffeeType } from "@pages/admin/admin.types";
import { PostgrestResponse } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabase";
import { UseFormSetValue } from "react-hook-form";

type Props = {
  id?: number;
  handleClose: () => void;
  setValue: UseFormSetValue<CoffeeType>;
};

export const useEditCoffee = ({ id, handleClose, setValue }: Props) => {
  const fetchCoffee = async (): Promise<PostgrestResponse<CoffeeType>> =>
    await supabase.from("coffee").select("*").eq("id", id);

  const { data } = useQuery({
    queryKey: ["dialog", "coffee", "db"],
    queryFn: fetchCoffee,
    select: (data) => data.data,
    enabled: !id,
  });

  if (data == null) {
    handleClose();
    return;
  }

  const keys = Object.keys(data[0]);
  //@ts-ignore
  keys.map((item) => setValue(item, data[0][item]));
};
