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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, TrendingUp, Eye, Heart, CheckCircle2, Clock, XCircle } from "lucide-react"
import { dashboardProperties } from "@/lib/data"

export default function AnalyticsPage() {
  // Calculate statistics
  const totalProperties = dashboardProperties.length
  const approvedProperties = dashboardProperties.filter(p => p.status === "approved").length
  const pendingProperties = dashboardProperties.filter(p => p.status === "pending").length
  const rejectedProperties = dashboardProperties.filter(p => p.status === "rejected").length
  const activeListings = approvedProperties
  const totalValue = dashboardProperties.reduce((sum, p) => sum + p.price, 0)
  const avgPrice = totalValue / totalProperties

  // Mock data for graphs
  const monthlyData = [
    { month: "Jan", properties: 45, revenue: 450000000 },
    { month: "Feb", properties: 52, revenue: 520000000 },
    { month: "Mar", properties: 48, revenue: 480000000 },
    { month: "Apr", properties: 61, revenue: 610000000 },
    { month: "May", properties: 55, revenue: 550000000 },
    { month: "Jun", properties: 67, revenue: 670000000 },
  ]

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
                  Analytics & Reports
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
        <div className="space-y-2">
          <h1 className="text-4xl font-serif font-bold tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your property portfolio performance and insights
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Properties
              </CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif font-bold">{totalProperties}</div>
              <p className="text-xs text-muted-foreground mt-1">
                All property listings
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Listings
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif font-bold text-emerald-600">{activeListings}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Currently approved
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Approvals
              </CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif font-bold text-yellow-600">{pendingProperties}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Awaiting review
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Portfolio Value
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif font-bold">
                PKR {(totalValue / 1000000000).toFixed(1)}B
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Total property value
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950 dark:to-blue-900/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                    Average Price
                  </p>
                  <p className="text-2xl font-serif font-bold text-blue-700 dark:text-blue-300">
                    PKR {(avgPrice / 1000000).toFixed(1)}M
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400 opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950 dark:to-purple-900/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-1">
                    Total Views
                  </p>
                  <p className="text-2xl font-serif font-bold text-purple-700 dark:text-purple-300">
                    12,483
                  </p>
                </div>
                <Eye className="h-8 w-8 text-purple-600 dark:text-purple-400 opacity-50" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-gradient-to-br from-pink-50 to-pink-100/50 dark:from-pink-950 dark:to-pink-900/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mb-1">
                    Saved/Favorites
                  </p>
                  <p className="text-2xl font-serif font-bold text-pink-700 dark:text-pink-300">
                    847
                  </p>
                </div>
                <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400 opacity-50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Breakdown */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Property Status Breakdown</CardTitle>
            <CardDescription>Overview of property approval statuses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Approved Properties</p>
                    <p className="text-sm text-muted-foreground">Live and active listings</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-serif font-bold text-emerald-600">{approvedProperties}</p>
                  <p className="text-xs text-muted-foreground">
                    {((approvedProperties / totalProperties) * 100).toFixed(0)}% of total
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-900">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Pending Approval</p>
                    <p className="text-sm text-muted-foreground">Under review by admin</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-serif font-bold text-yellow-600">{pendingProperties}</p>
                  <p className="text-xs text-muted-foreground">
                    {((pendingProperties / totalProperties) * 100).toFixed(0)}% of total
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-red-50 dark:bg-red-950/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-red-100 dark:bg-red-900">
                    <XCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Rejected Properties</p>
                    <p className="text-sm text-muted-foreground">Did not meet criteria</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-serif font-bold text-red-600">{rejectedProperties}</p>
                  <p className="text-xs text-muted-foreground">
                    {((rejectedProperties / totalProperties) * 100).toFixed(0)}% of total
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Performance */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Monthly Performance</CardTitle>
            <CardDescription>Property listings and revenue trends (Mock Data)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {monthlyData.map((month) => (
                <div key={month.month} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-muted-foreground">
                    {month.month}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{month.properties} properties</span>
                      <span className="text-sm font-medium">PKR {(month.revenue / 1000000).toFixed(0)}M</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all"
                        style={{ width: `${(month.properties / 70) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  )
}
