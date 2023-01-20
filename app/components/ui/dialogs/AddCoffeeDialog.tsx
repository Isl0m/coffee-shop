import { Dialog, Transition } from "@headlessui/react";

import AdminInput from "@pages/admin/AdminInput";
import { CoffeeType } from "@shared/types/coffee.types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Button from "@ui/button/Button";
import FileInput from "@ui/file-input/FileInput";
import Heading from "@ui/text/Heading";
import { FC, Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  refetch: () => void;
};

const AddCoffeeDialog: FC<Props> = ({ isOpen, refetch, handleClose }) => {
  const supabaseClient = useSupabaseClient();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    reset,
  } = useForm<CoffeeType>({ mode: "onChange" });

  const onSubmit: SubmitHandler<CoffeeType> = async (formdata) => {
    if (!formdata.imageSrc) {
      console.log(formdata);
      setError("imageSrc", { message: "Image is required" });
      return;
    }
    await supabaseClient.from("coffee").insert([formdata]);
    handleClose();
    refetch();
    reset();
  };

  const setImageSrcValue = (imageSrc: string) => {
    setValue("imageSrc", imageSrc);
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 "
            aria-hidden="true"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl py-4 px-8 rounded bg-white">
                <Dialog.Title>
                  <Heading>Add Coffee</Heading>
                </Dialog.Title>

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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default AddCoffeeDialog;
