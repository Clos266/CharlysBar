export default function DrinkDetails({
  drink,
  closeModal
}) {

  return (

    <div
      onClick={closeModal}
      className="
        fixed
        inset-0
        bg-black/80
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
        p-4
      "
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-zinc-900
          rounded-3xl
          overflow-hidden
          max-w-2xl
          w-full
          text-white
          relative
          shadow-2xl
          animate-in
        "
      >

        <button
          onClick={closeModal}
          className="
            absolute
            top-4
            right-4
            text-4xl
            text-white
            z-10
            hover:text-amber-400
            transition
          "
        >
          ×
        </button>

        <img
          src={drink.image}
          alt={drink.name}
          className="
            w-full
            h-96
            object-cover
          "
        />

        <div className="p-8 space-y-6">

          <div>

            <span
              className="
                text-amber-400
                uppercase
                tracking-[0.2em]
                text-sm
              "
            >
              {drink.category}
            </span>

            <h2
              className="
                text-5xl
                font-black
                mt-2
              "
            >
              {drink.name}
            </h2>

          </div>

          <p className="text-zinc-300 text-lg">
            {drink.description}
          </p>

          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-3
                text-amber-400
              "
            >
              Recipe
            </h3>

            <ul className="space-y-2">

              {drink.recipe.map((item, index) => (

                <li
                  key={index}
                  className="
                    bg-black/40
                    rounded-lg
                    px-4
                    py-3
                    text-zinc-200
                  "
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-2
                text-amber-400
              "
            >
              Garnish
            </h3>

            <p className="text-zinc-300">
              {drink.garnish}
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}