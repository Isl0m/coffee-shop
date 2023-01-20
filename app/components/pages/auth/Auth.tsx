import Layout from "@components/layout/Layout";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Button from "@ui/button/Button";
import Heading from "@ui/text/Heading";
import { emailRegExp } from "@utils/regex";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthInput from "./AuthInput";
import AuthToggler from "./AuthToggler";

export type AuthForm = {
  email: string;
  password: string;
};

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const user = useUser();
  const { push } = useRouter();

  const supabaseClient = useSupabaseClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthForm>({
    mode: "onChange",
  });

  useEffect(() => {
    if (user) push("/");
  }, [user, push]);

  const onSubmit: SubmitHandler<AuthForm> = async (data) => {
    if (isLogin) {
      await supabaseClient.auth.signInWithPassword(data);
    } else {
      await supabaseClient.auth.signUp(data);
    }
    reset();
  };

  const toggleAuthType = () => setIsLogin((prev) => !prev);

  return (
    <Layout>
      <Heading>{isLogin ? "Log in" : "Sign up"}</Heading>
      <form
        className="max-w-sm flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <AuthInput
          label="email"
          register={register}
          type="email"
          error={errors.email}
          options={{
            required: "Email is required",
            pattern: {
              value: emailRegExp,
              message: "Please enter a valid email address",
            },
          }}
        />
        <AuthInput
          label="password"
          register={register}
          type="password"
          error={errors.password}
          options={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Min length should more 6 symbols",
            },
          }}
        />
        <Button size="large" className=" w-full" type="submit">
          {isLogin ? "Log in" : "Sign up"}
        </Button>
      </form>
      <AuthToggler isLogin={isLogin} handleClick={toggleAuthType} />
    </Layout>
  );
};

export default Auth;
