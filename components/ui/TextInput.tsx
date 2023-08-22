
interface TextInputType extends React.HTMLProps<HTMLInputElement> {
  title: string;
}
export const TextInput: React.FC<TextInputType> = ({ title, ...attributes }) => {
  return (
    <>
    <label className="block text-sm font-medium text-gray-700">
        {title}
    </label>
    <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...attributes}
    />
</>
  )
}
