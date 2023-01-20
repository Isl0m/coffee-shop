import { CoffeeType } from "@shared/types/coffee.types";
import { PostgrestResponse } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabase";
import { useMemo } from "react";

const theadData = ["id", "name", "description", "price", "rating"];

export const useTableData = () => {
  const fetchCoffee = async (): Promise<PostgrestResponse<CoffeeType>> =>
    await supabase.from("coffee").select("*");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["table", "coffee", "db"],
    queryFn: fetchCoffee,
    select: (data) => data.data,
  });

  const handleRemove = async (id: any) => {
    if (confirm("Are you sure?")) {
      await supabase.from("coffee").delete().eq("id", id);
      refetch();
    }
  };

  const tbodyData = data?.map(({ imageSrc, created_at, ...rest }) => {
    return {
      imageSrc: imageSrc,
      items: Object.values(rest),
    };
  });

  return useMemo(
    () => ({
      data: { tbodyData, theadData },
      refetch,
      isLoading,
      handleRemove,
    }),
    [tbodyData]
  );
};
