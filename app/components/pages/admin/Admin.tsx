import Layout from "@components/layout/Layout";
import Button from "@ui/button/Button";

import Heading from "@ui/text/Heading";
import { useState } from "react";
import Table from "@ui/table/Table";
import AddCoffeeDialog from "@ui/dialogs/AddCoffeeDialog";
import { useTableData } from "./useTableData";
import Spinner from "@ui/spinner/Spinner";

const Admin = () => {
  const [isAddDialog, setIsAddDialog] = useState<boolean>(false);
  const {
    data: { tbodyData, theadData },
    refetch,
    handleRemove,
    isLoading,
  } = useTableData();

  const handleOpenAddDialog = () => setIsAddDialog(true);
  const handleCloseAddDialog = () => setIsAddDialog(false);
  return (
    <Layout>
      <div className="flex items-center justify-between">
        <Heading>Coffee</Heading>
        <Button onClick={handleOpenAddDialog}>Add Coffee</Button>
      </div>
      {isLoading || !tbodyData ? (
        <Spinner />
      ) : (
        <Table
          tbodyData={tbodyData}
          theadData={theadData}
          controls={{ handleRemove }}
        />
      )}
      <AddCoffeeDialog
        isOpen={isAddDialog}
        handleClose={handleCloseAddDialog}
        refetch={refetch}
      />
    </Layout>
  );
};

export default Admin;
