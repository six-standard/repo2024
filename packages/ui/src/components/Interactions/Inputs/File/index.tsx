import { IDefaultProp, Layout } from "../Layout";

interface IProp extends IDefaultProp {
  value?: {
    image_path: string;
    original_name: string;
  };
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onDelete?: (id?: string) => void;
  id?: string;
  accept?: string;
}

export const File = ({
  size,
  value,
  disabled,
  placeholder,
  onChange,
  onDelete,
  accept,
  required,
  label,
  id
}: IProp) => {
  // 파일 표기 로직 좀 고민해봐야 함
  return (
    <Layout
      size={size}
      required={required}
      label={label}
      disabled={disabled}
      icon={value && { name: "Trash", action: () => onDelete(id) }}
    >
      <label className="whitespace-nowrap overflow-x-auto w-full leading-none overflow-y-hidden">
        <span
          className={`${value ? "text-white" : "text-gray-300"} leading-[1.31] w-full truncate overflow-y-hidden block text-[14px] px-5 py-[15px] h-full cursor-pointer`}
        >
          {value ? value.original_name : placeholder}
        </span>
        <input
          type="file"
          className="hidden absolute"
          accept={accept}
          onChange={onChange}
        />
      </label>
    </Layout>
  );
};
