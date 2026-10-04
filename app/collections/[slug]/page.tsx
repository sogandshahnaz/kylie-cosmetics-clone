import CollectionPage from "@/components/collections/CollectionPage";
import { notFound } from "next/navigation";
import { collection } from "@/data/collection";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function Page({params} : PageProps) {
    const {slug} = await params;
    if (!collection[slug as keyof typeof collection]) {
      notFound();
    }
  
    return <CollectionPage slug={slug} />;
}
