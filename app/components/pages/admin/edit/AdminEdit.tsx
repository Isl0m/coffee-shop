import { FC } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import AdminInput from "../AdminInput";
import FileInput from "@ui/file-input/FileInput";
import Button from "@ui/button/Button";
import { CoffeeType } from "@shared/types/coffee.types";
import { useRouter } from "next/router";
import Layout from "@components/layout/Layout";
import { SupabaseService } from "services/supabase.service";
import Heading from "@ui/text/Heading";

type Props = {
  coffee: CoffeeType;
};

const AdminEdit: FC<Props> = ({ coffee }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
    reset,
  } = useForm<CoffeeType>({ defaultValues: coffee, mode: "onChange" });
  const { push } = useRouter();

  const onSubmit: SubmitHandler<CoffeeType> = async (formdata) => {
    const error = await SupabaseService.updateById(String(coffee.id), formdata);
    if (error) {
      return;
    }
    push("/admin");
    reset();
  };

  const setImageSrcValue = (imageSrc: string) => {
    setValue("imageSrc", imageSrc);
  };
  return (
    <Layout>
      <Heading>Edit Coffee</Heading>
      <form
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <AdminInput
          label="name"
          register={register}
          type="text"
          error={errors.name}
          options={{
            required: "Name is required",
          }}
        />
        <AdminInput
          label="description"
          register={register}
          type="text"
          error={errors.description}
          options={{
            required: "Description is required",
          }}
        />
        <AdminInput
          label="price"
          register={register}
          type="number"
          error={errors.price}
          options={{
            required: "Price is required",
          }}
        />
        <AdminInput
          label="rating"
          register={register}
          type="number"
          error={errors.rating}
          options={{ min: 0, max: 5 }}
        />
        <FileInput
          defaultImageSrc={getValues("imageSrc")}
          setImageSrcValue={setImageSrcValue}
          error={errors.imageSrc}
        />
        <Button
          size="large"
          className="justify-self-center col-span-2 aspect-4"
          type="submit"
        >
          Send
        </Button>
      </form>
    </Layout>
  );
};

export default AdminEdit;
