import { CoffeeType } from "@shared/types/coffee.types";
import Input, { InputProps } from "@ui/input/Input";
import { FC } from "react";

const AdminInput: FC<InputProps<CoffeeType>> = (props) => {
	return <Input<CoffeeType> {...props} />;
};

export default AdminInput;
