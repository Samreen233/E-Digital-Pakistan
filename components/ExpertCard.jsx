export default function ExpertCard({ img, name, role, title, previous }) {
  return (
    <div className="min-w-[250px] bg-white rounded-lg shadow-md p-4 text-center">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-black">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
      {title && <p className="text-sm text-gray-600">{title}</p>}
      {previous && (
        <p className="text-xs text-gray-500 mt-2">Previously at {previous}</p>
      )}
    </div>
  );
}
