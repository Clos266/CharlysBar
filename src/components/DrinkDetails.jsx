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
          max-h-[90vh]
          overflow-y-auto
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
          src={drink.image || "/images/placeholder.jpg"}
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

          {(drink.origin ||
            drink.region ||
            drink.producer ||
            drink.age ||
            drink.year) && (

            <div className="flex flex-wrap gap-2">

              {drink.origin && (
                <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
                  {drink.origin}
                </span>
              )}

              {drink.region && (
                <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
                  {drink.region}
                </span>
              )}

              {drink.producer && (
                <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
                  {drink.producer}
                </span>
              )}

              {drink.age && (
                <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
                  {drink.age} Years
                </span>
              )}

              {drink.year && (
                <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
                  {drink.year}
                </span>
              )}

            </div>

          )}

          {drink.description && (

            <p className="text-zinc-300 text-lg">
              {drink.description}
            </p>

          )}

          {drink.price && (

            <div>
              <h3
                className="
                  text-xl
                  font-bold
                  mb-2
                  text-amber-400
                "
              >
                Price
              </h3>

              <p className="text-2xl font-bold">
                € {drink.price.toFixed(2)}
              </p>
            </div>

          )}

          {drink.prices && (

            <div>

              <h3
                className="
                  text-xl
                  font-bold
                  mb-3
                  text-amber-400
                "
              >
                Sizes
              </h3>

              <ul className="space-y-2">

                {drink.prices.map((item, index) => (

                  <li
                    key={index}
                    className="
                      bg-black/40
                      rounded-lg
                      px-4
                      py-3
                      flex
                      justify-between
                    "
                  >

                    <span>{item.volume}</span>

                    <span className="text-amber-400">
                      € {item.price.toFixed(2)}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          )}

          {drink.recipe && (

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
                      flex
                      justify-between
                      text-zinc-200
                    "
                  >

                    <span>{item.ingredient}</span>

                    <span className="text-amber-400">
                      {item.amount}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          )}

          {drink.garnish && (

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

          )}

          {drink.tags?.length > 0 && (

            <div>

              <h3
                className="
                  text-xl
                  font-bold
                  mb-3
                  text-amber-400
                "
              >
                Tags
              </h3>

              <div className="flex flex-wrap gap-2">

                {drink.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                      bg-amber-500/20
                      text-amber-400
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}