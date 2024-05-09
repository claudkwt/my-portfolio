import { Badge } from "@/app/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/app/ui/card"

export default function Projects() {
    return (
        <div className="flex flex-col mb-10">
            <div className="font-bold text-2xl py-6 hidden md:block">Projects </div>
            <div className="md:grid-cols-3 md:grid md:gap-3">
                <Card  className="w-full m-3 border-0 bg-popover rounded-lg">
                    <CardHeader>
                        <CardTitle>Project Title</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Badge>#Tag</Badge>
                    </CardContent>
                </Card>
                <Card  className="w-full m-3 border-0 bg-popover rounded-lg">
                    <CardHeader>
                        <CardTitle>Project Title</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Badge>#Tag</Badge>
                    </CardContent>
                </Card>
                <Card  className="w-full m-3 border-0 bg-popover rounded-lg">
                    <CardHeader>
                        <CardTitle>Project Title</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Badge>#Tag</Badge>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}