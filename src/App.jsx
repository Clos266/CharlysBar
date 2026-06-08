import { drinks } from "./data/drinks"
import { useState } from "react"
import DrinkCard from "./components/DrinkCard"
import DrinkDetails from "./components/DrinkDetails"

export default function App() {

  const [selectedDrink, setSelectedDrink] = useState(null)

  const [selectedCategory, setSelectedCategory] =
    useState("All drinks")

  const [searchTerm, setSearchTerm] = useState("")

  const [showAdvancedFilters, setShowAdvancedFilters] =
    useState(false)

  const basicCategories = [
    "All drinks",
    "Featured",
    "Cocktail",
    "Spritz",
    "Longdrink",
    "Alcohol Free",
    "Beer",
    "Spirits",
  ]

  const advancedCategories = [
    ...new Set(
      drinks
        .map((drink) => drink.category)
        .filter(Boolean)
        .sort()
    ),
  ]

  const categories = showAdvancedFilters
    ? ["All drinks", ...advancedCategories]
    : basicCategories

  const filteredDrinks = drinks.filter((drink) => {

    const matchesCategory =

      selectedCategory === "All drinks"

      ||

      (
        selectedCategory === "Featured" &&
        drink.featured
      )

      ||

      (
        selectedCategory === "Spirits" &&
        [
          "Rum",
          "Whisky",
          "Vodka",
          "Liqueur",
          "Bitter",
          "Amaro",
          "Fruit Brandy",
          "Grappa",
          "Marc",
          "Cognac",
          "Armagnac",
          "Port Wine",
        ].includes(drink.category)
      )

      ||

      drink.category === selectedCategory

    const matchesSearch =
      drink.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const buttonStyle = `
    bg-zinc-900
    text-white
    px-5
    py-2
    rounded-full
    hover:bg-amber-500
    hover:text-black
    transition
  `

  const activeButtonStyle = `
    bg-amber-500
    text-black
    px-5
    py-2
    rounded-full
    transition
  `

  return (

    <div className="min-h-screen bg-black px-4 py-8 md:p-10">

      <h1
        className="
          text-5xl
          md:text-6xl
          font-black
          text-white
          mb-10
        "
      >
        Charly's Bar
      </h1>

      <input
        type="text"
        placeholder="Search drink..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          md:w-96
          px-4
          py-3
          mb-6
          rounded-full
          bg-zinc-900
          text-white
          border
          border-zinc-700
          focus:outline-none
          focus:border-amber-500
        "
      />

      <button
        onClick={() =>
          setShowAdvancedFilters(!showAdvancedFilters)
        }
        className="
          mb-8
          bg-amber-500
          text-black
          px-4
          py-2
          rounded-full
          font-semibold
          hover:opacity-90
          transition
        "
      >
        {showAdvancedFilters
          ? "Basic Filters"
          : "Advanced Filters"}
      </button>

      <div className="flex flex-wrap gap-4 mb-10">

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? activeButtonStyle
                : buttonStyle
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>

      <ul
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
        "
      >

        {filteredDrinks.map((drink) => (

          <DrinkCard
            key={drink.id}
            drink={drink}
            setSelectedDrink={setSelectedDrink}
          />

        ))}

      </ul>

      {selectedDrink && (

        <DrinkDetails
          drink={selectedDrink}
          closeModal={() => setSelectedDrink(null)}
        />

      )}

    </div>
  )
}