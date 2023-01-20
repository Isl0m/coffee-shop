import { FC, memo, PropsWithChildren } from "react";
import s from "./Text.module.scss";

const Heading: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className={s.heading}>{children}</h1>;
};

export default memo(Heading);
