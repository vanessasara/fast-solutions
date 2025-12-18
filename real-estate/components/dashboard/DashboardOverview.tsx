"use client"

import { properties, dashboardStats, dashboardActions, propertyTypeData, propertyTypeConfig, propertyStatusData, propertyStatusConfig, locationDistributionData, locationDistributionConfig, priceRangeData, priceRangeConfig } from "@/lib/data"
import { Building2, Home, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Label, Pie, PieChart } from "recharts"
import Link from "next/link"
import Image from "next/image"
import * as React from "react"

// Icon mapping
const iconMap = {
  Building2,
  TrendingUp,
  Home,
  Users
}

export function DashboardOverview() {
  const totalPropertyTypes = React.useMemo(() => {
    return propertyTypeData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  const totalPropertyStatus = React.useMemo(() => {
    return propertyStatusData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  const totalLocations = React.useMemo(() => {
    return locationDistributionData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  const totalPriceRanges = React.useMemo(() => {
    return priceRangeData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-4xl font-serif font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground text-lg mt-1">
          Welcome back! Here's an overview of your real estate portfolio.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, index) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap]
          return (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-serif font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
                <p className={`text-xs mt-1 font-medium ${
                  stat.changeType === 'positive' ? 'text-emerald-600' :
                  stat.changeType === 'neutral' ? 'text-muted-foreground' :
                  'text-red-600'
                }`}>
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Pie Charts Grid */}
      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-serif font-semibold">Portfolio Analytics</h3>
          <p className="text-muted-foreground">Visual breakdown of your property portfolio</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Property Type Distribution */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="items-center pb-0">
              <CardTitle className="text-xl font-serif">Property Type Distribution</CardTitle>
              <CardDescription>Breakdown by property categories</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-4">
              <ChartContainer
                config={propertyTypeConfig as ChartConfig}
                className="mx-auto aspect-square max-h-[280px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={propertyTypeData}
                    dataKey="count"
                    nameKey="type"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalPropertyTypes}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Properties
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Property Status */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="items-center pb-0">
              <CardTitle className="text-xl font-serif">Property Status</CardTitle>
              <CardDescription>Current property availability</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-4">
              <ChartContainer
                config={propertyStatusConfig as ChartConfig}
                className="mx-auto aspect-square max-h-[280px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={propertyStatusData}
                    dataKey="count"
                    nameKey="status"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalPropertyStatus}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Total
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Location Distribution */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="items-center pb-0">
              <CardTitle className="text-xl font-serif">Location Distribution</CardTitle>
              <CardDescription>Properties by geographic area</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-4">
              <ChartContainer
                config={locationDistributionConfig as ChartConfig}
                className="mx-auto aspect-square max-h-[280px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={locationDistributionData}
                    dataKey="count"
                    nameKey="location"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalLocations}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Locations
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Price Range Distribution */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="items-center pb-0">
              <CardTitle className="text-xl font-serif">Price Range Distribution</CardTitle>
              <CardDescription>Properties by value brackets</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-4">
              <ChartContainer
                config={priceRangeConfig as ChartConfig}
                className="mx-auto aspect-square max-h-[280px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={priceRangeData}
                    dataKey="count"
                    nameKey="range"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalPriceRanges}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Ranges
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Properties and Quick Actions */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Properties */}
        <Card className="col-span-full lg:col-span-2 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-serif">Recent Properties</CardTitle>
            <CardDescription>
              Your latest property listings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {properties.slice(0, 5).map((property) => (
                <div key={property.id} className="flex items-center gap-4 rounded-lg border p-3 hover:bg-accent/50 transition-colors">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                    <Image
                      fill
                      src={property.image}
                      alt={property.title}
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 space-y-1 min-w-0">
                    <p className="text-sm font-medium leading-none truncate">
                      {property.title}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {property.address}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-semibold">{property.price}</p>
                    <p className="text-xs text-muted-foreground whitespace-nowrap">
                      {property.bedrooms} beds • {property.bathrooms} baths
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-serif">Quick Actions</CardTitle>
            <CardDescription>
              Manage your properties
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {dashboardActions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant}
                className="w-full"
                asChild
              >
                <Link href={action.href}>
                  {action.label}
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
