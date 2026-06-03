export default function DrinkCard({
  drink,
  setSelectedDrink
}) {

  return (

    <li
      onClick={() => setSelectedDrink(drink)}
      className="
        group
        relative
        bg-zinc-900
        rounded-2xl
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
        hover:z-10
        shadow-xl
      "
    >

      <img
        src={drink.image}
        alt={drink.name}
        className="
          w-full
          h-80
          object-cover
          transition-all
          duration-300
          group-hover:brightness-50
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-5
          bg-gradient-to-t
          from-black
          via-black/70
          to-transparent
        "
      >

        <span
          className="
            inline-block
            text-xs
            uppercase
            tracking-[0.2em]
            text-amber-400
            mb-2
          "
        >
          {drink.category}
        </span>

        <div className="flex items-center justify-between">

          <h2
            className="
              text-3xl
              font-black
              text-white
            "
          >
            {drink.name}
          </h2>

          <span
            className="
              text-white
              text-2xl
              font-light
            "
          >
            +
          </span>

        </div>

      </div>

    </li>
  )
}