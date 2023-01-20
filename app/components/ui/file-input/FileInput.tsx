import Spinner from "@ui/spinner/Spinner";
import Image from "next/image";
import { FC } from "react";
import { FieldError } from "react-hook-form";
import { useUpload } from "./useUpload";

export type FileInputProps = {
  defaultImageSrc?: string;
  setImageSrcValue: (imageSrc: string) => void;
  error?: FieldError;
};

const FileInput: FC<FileInputProps> = ({
  defaultImageSrc,
  setImageSrcValue,
  error,
}) => {
  const { handleUpload, isLoading, newImagePath } = useUpload({
    setImageSrcValue,
  });
  const imageSrc = newImagePath || defaultImageSrc;
  return (
    <label className="flex items-center outline-none col-span-2">
      <input
        type="file"
        onChange={handleUpload}
        className="block w-fit text-sm text-gray-500 
        outline-none focus:outline-none file:cursor-pointer
        file:mr-4 file:py-2 file:px-4
        file:rounded-md file:border-0
        file:text-sm file:font-semibold
        file:bg-indigo-50 file:text-indigo-700
        hover:file:bg-indigo-100"
      />
      {isLoading && <Spinner />}
      {imageSrc && (
        <Image
          src={imageSrc}
          className="rounded-md shadow-md"
          height={100}
          width={100}
          alt="preview"
        />
      )}
      {error && <div className="text-sm text-pink-700">{error.message}</div>}
    </label>
  );
};

export default FileInput;
