import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="p-6">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>shadcn/ui 確認</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Tabs defaultValue="basic">
            <TabsList>
              <TabsTrigger value="basic">基本</TabsTrigger>
              <TabsTrigger value="extra">追加</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 pt-4">
              <Label>Label</Label>
              <Input placeholder="Input" />
              <Button>Button</Button>
              <Badge>Badge</Badge>
            </TabsContent>
            <TabsContent value="extra" className="pt-4">
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/b13o.png" />
                    <AvatarFallback>b13o</AvatarFallback>
                  </Avatar>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, voluptas dolorum nemo dolore distinctio numquam
                    doloribus doloremque optio velit illum id exercitationem!
                    Dicta ad maiores numquam deserunt, reiciendis vitae quos!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, voluptas dolorum nemo dolore distinctio numquam
                    doloribus doloremque optio velit illum id exercitationem!
                    Dicta ad maiores numquam deserunt, reiciendis vitae quos!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, voluptas dolorum nemo dolore distinctio numquam
                    doloribus doloremque optio velit illum id exercitationem!
                    Dicta ad maiores numquam deserunt, reiciendis vitae quos!
                  </p>
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
}
