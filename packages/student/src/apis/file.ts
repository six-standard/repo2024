import { useMyMutation } from "@configs/util";
import { Api } from "@configs/type";

export const fileUpload = () =>
  useMyMutation<FormData, Api.File.Image>("post", "file", `/image`);

export const fileRemove = () =>
  useMyMutation<string, null>("delete", "file", "");
