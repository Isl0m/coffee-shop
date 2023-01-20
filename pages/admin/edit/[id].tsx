import AdminEdit from "@pages/admin/edit/AdminEdit";
import { CoffeeType } from "@shared/types/coffee.types";
import { GetServerSideProps, NextPage } from "next";
import { SupabaseService } from "services/supabase.service";

const AdminEditPage: NextPage<{ coffee: CoffeeType }> = (props) => {
  return <AdminEdit {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const coffee = await SupabaseService.getById(String(id));
  return {
    props: { coffee },
  };
};

export default AdminEditPage;
