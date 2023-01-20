import { CoffeeType } from "@shared/types/coffee.types";
import { supabase } from "@utils/supabase";

export const SupabaseService = {
  async getAll(): Promise<CoffeeType[] | null> {
    const { data, error } = await supabase.from("coffee").select("*");
    return data;
  },
  async getById(id: string) {
    const { data } = await supabase.from("coffee").select("*").eq("id", id);
    if (data) {
      return data[0] as CoffeeType;
    }
  },
  async updateById(id: string, data: CoffeeType) {
    const { error } = await supabase.from("coffee").update(data).eq("id", id);
    if (error) {
      return error;
    }
  },
};
