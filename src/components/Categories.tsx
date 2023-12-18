type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b-2 border-gray-500">Category</h2>
      <ul>
        {categories.map(category => {
          return (
            <li
              className={`cursor-pointer my-2 rounded-md capitalize hover:bg-green-200  ${
                selected === category && 'bg-green-500'
              }`}
              key={category}
              onClick={() => onClick(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
