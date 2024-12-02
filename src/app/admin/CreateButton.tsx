import { useFormStatus } from "react-dom";

const CreateButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full font-medium flex items-center justify-center bg-red-600 px-4 py-2 rounded-md hover:bg-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        "Létrehozás"
      )}
    </button>
  );
};

export default CreateButton;
