import { useState } from "react"
;("use client")

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"

const CarFilters = ({ filters }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // get current filter values from searchParams
  const currentMake = searchParams.get("make") || ""
  const currentBodyType = searchParams.get("bodyType") || ""
  const currentFuelType = searchParams.get("fuelType") || ""
  const currentTransmission = searchParams.get("transmission") || ""
  const currentMinPrice = searchParams.get("minPrice")
    ? parseInt(searchParams.get("minPrice"))
    : filters.priceRange.min
  const currentMaxPrice = searchParams.get("maxPrice")
    ? parseInt(searchParams.get("maxPrice"))
    : filters.priceRange.max
  const currentSortBy = searchParams.get("sortBy") || "newest"

  const [make, setMake] = useState(currentMake)
  const [bodyType, setBodyType] = useState(currentBodyType)
  const [fuelType, setFuelType] = useState(currentFuelType)
  const [transmission, setTransmission] = useState(currentTransmission)
  const [priceRange, setPriceRange] = useState([
    currentMinPrice,
    currentMaxPrice,
  ])
  const [sortBy, setSortBy] = useState(currentSortBy)

  return <div>CarFilters</div>
}

export default CarFilters
