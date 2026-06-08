export default function DrinkCard({
  drink,
  setSelectedDrink
}) {

  const displayPrice =
    drink.price ??
    drink.prices?.[0]?.price

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

      {drink.featured && (

        <span
          className="
            absolute
            top-3
            right-3
            z-10
            bg-amber-500
            text-black
            px-3
            py-1
            rounded-full
            text-xs
            font-bold
          "
        >
          ★ Featured
        </span>

      )}

      <img
        src={drink.image || "/images/placeholder.jpg"}
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

        <div className="flex items-center justify-between gap-4">

          <h2
            className="
              text-2xl
              md:text-3xl
              font-black
              text-white
              leading-tight
            "
          >
            {drink.name}
          </h2>

          <span
            className="
              text-white
              text-2xl
              font-light
              shrink-0
            "
          >
            +
          </span>

        </div>

        <div className="mt-3 flex items-center justify-between">

          {displayPrice && (

            <span
              className="
                text-amber-400
                font-bold
                text-lg
              "
            >
              € {displayPrice.toFixed(2)}
            </span>

          )}

          {drink.volume && (

            <span
              className="
                text-zinc-400
                text-sm
              "
            >
              {drink.volume}
            </span>

          )}

        </div>

      </div>

    </li>
  )
}