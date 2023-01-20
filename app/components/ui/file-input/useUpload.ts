import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";
import { getImagePath } from "utils/supabase/getImagePath";
import { FileInputProps } from "./FileInput";
import { supabase } from "@utils/supabase";

export const useUpload = ({ setImageSrcValue }: FileInputProps) => {
  const [newImagePath, setNewImagePath] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const uuid = uuidv4();

  const supabseUpload = async (file: File) => {
    if (supabase) {
      const path = "public/img" + uuid + ".png";
      const { data, error } = await supabase.storage
        .from("images")
        .upload(path, file);

      if (data?.path) {
        const imageSrc = getImagePath(data?.path);
        setNewImagePath(imageSrc);
        setImageSrcValue(imageSrc);
      }
      setIsLoading(false);
    }
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      setIsLoading(true);
      supabseUpload(files[0]);
    }
  };

  return { handleUpload, isLoading, newImagePath };
};
