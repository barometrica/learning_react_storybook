import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

export const validationSchema = yup
  .object({
    mailAddress: yup.string().required("メールアドレスを入力してください"),
    password: yup.string().required("パスワードを入力してください"),
  })
  .required();

type Inputs = {
  mailAddress: string;
  password: string;
};

export const SignInForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(validationSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrap">
        <div className="content">
          <input
            type="text"
            placeholder="メールアドレス"
            {...register("mailAddress")}
          />
          {errors.mailAddress && (
            <div role="alert" className="error">
              {errors.mailAddress.message}
            </div>
          )}
        </div>
        <div className="content">
          <input
            type="password"
            placeholder="パスワード"
            {...register("password")}
          />
          {errors.password && (
            <div role="alert" className="error">
              {errors.password.message}
            </div>
          )}
        </div>
        <div className="content">
          <input type="submit" value="ログイン" />
        </div>
      </div>
    </form>
  );
};
