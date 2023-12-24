import { PRODUITS } from "@/components/data";
import ProduitsLists from "@/components/features/ProduitsLists";
import Tabs, { TabsList, TabsContent, TabsTrigger } from "@/components/ui/Tabs";

export default function Home() {
  return (
    <main className="">
      <div className=" max-w-7xl m-auto p-10">
        <Tabs defaultValue="Produits">
          <TabsList>
            <TabsTrigger
              name="Produits"
              value="Produits"
              count={PRODUITS.length}
            />
            <TabsTrigger name="Utilisateurs" value="Utilisateurs" count={6} />
            <TabsTrigger name="Commandes" value="Commandes" count={10} />
          </TabsList>
          <TabsContent value="Produits">
            <ProduitsLists PRODUITS={PRODUITS} />
          </TabsContent>
          <TabsContent value="Utilisateurs">
            <h2>Utilisateurs</h2>
          </TabsContent>
          <TabsContent value="Commandes">
            <h2>Commandes</h2>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
