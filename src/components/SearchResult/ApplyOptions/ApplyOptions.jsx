export default function ApplyOptions({ apply_options }) {
  return apply_options.map((option, i) => (
    <aside key={i + "ao"} className="flex flex-col text-sm sm:text-base">
      <h2 className="font-semibold">Publisher: {`${option.publisher}`}</h2>
      <a
        className="text-blue-800 underline"
        target="_blank"
        href={option.apply_link}
      >
        Apply link
      </a>
    </aside>
  ));
}
