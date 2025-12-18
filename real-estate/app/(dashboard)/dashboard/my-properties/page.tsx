"use client"

import { NavActions } from "@/components/nav-actions"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, Bed, Bath, Maximize, Edit, Trash2, Eye, Calendar } from "lucide-react"
import { getPropertiesByUserId } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function MyPropertiesPage() {
  // Mock user ID - in real app, get from auth
  const userId = "user_123"
  const myProperties = getPropertiesByUserId(userId)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
      case "approved":
        return <Badge className="bg-green-600 hover:bg-green-700">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-600 hover:bg-red-700">Rejected</Badge>
      default:
        return null
    }
  }

  const getListingBadge = (type: string) => {
    return type === "sale" ? (
      <Badge className="bg-emerald-600 hover:bg-emerald-700">For Sale</Badge>
    ) : (
      <Badge className="bg-blue-600 hover:bg-blue-700">For Rent</Badge>
    )
  }

  return (
    <SidebarInset>
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-1 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  My Properties
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-4">
          <NavActions />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6">
        {/* Page Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-serif font-bold tracking-tight">
              My Properties
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your property listings and track their status
            </p>
          </div>
          <Link href="/dashboard/add-property">
            <Button size="lg" className="shadow-sm">
              Add New Property
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border-0 shadow-sm bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950 dark:to-emerald-900/20">
            <CardContent className="p-6">
              <div className="text-3xl font-serif font-bold text-emerald-700 dark:text-emerald-400">
                {myProperties.filter(p => p.status === "approved").length}
              </div>
              <div className="text-sm text-emerald-600 dark:text-emerald-500 font-medium mt-1">
                Approved
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50 to-yellow-100/50 dark:from-yellow-950 dark:to-yellow-900/20">
            <CardContent className="p-6">
              <div className="text-3xl font-serif font-bold text-yellow-700 dark:text-yellow-400">
                {myProperties.filter(p => p.status === "pending").length}
              </div>
              <div className="text-sm text-yellow-600 dark:text-yellow-500 font-medium mt-1">
                Pending Review
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950 dark:to-red-900/20">
            <CardContent className="p-6">
              <div className="text-3xl font-serif font-bold text-red-700 dark:text-red-400">
                {myProperties.filter(p => p.status === "rejected").length}
              </div>
              <div className="text-sm text-red-600 dark:text-red-500 font-medium mt-1">
                Rejected
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Properties List */}
        {myProperties.length === 0 ? (
          <Card className="border-0 shadow-sm">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="rounded-full bg-muted p-6 mb-4">
                <Eye className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-2">No Properties Yet</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                You haven't listed any properties. Start by adding your first property listing.
              </p>
              <Link href="/dashboard/add-property">
                <Button size="lg">Add Your First Property</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {myProperties.map((property, index) => (
              <Card
                key={property.id}
                className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: 'slideInLeft 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {getStatusBadge(property.status)}
                      {getListingBadge(property.type)}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col">
                    <CardContent className="flex-1 p-6">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-serif text-2xl font-semibold mb-2">
                            {property.title}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{property.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground line-clamp-2">
                          {property.description}
                        </p>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                          {property.bedrooms && (
                            <div className="flex items-center gap-1.5">
                              <Bed className="h-4 w-4" />
                              <span>{property.bedrooms} Beds</span>
                            </div>
                          )}
                          {property.bathrooms && (
                            <div className="flex items-center gap-1.5">
                              <Bath className="h-4 w-4" />
                              <span>{property.bathrooms} Baths</span>
                            </div>
                          )}
                          {property.area && (
                            <div className="flex items-center gap-1.5">
                              <Maximize className="h-4 w-4" />
                              <span>{property.area}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>Listed {property.createdAt.toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardContent>

                    {/* Footer with Price and Actions */}
                    <CardFooter className="p-6 pt-0 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-3xl font-serif font-bold">
                          PKR {(property.price / 1000000).toFixed(1)}M
                        </p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {property.propertyType}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1.5" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1.5" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </SidebarInset>
  )
}
