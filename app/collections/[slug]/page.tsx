import CollectionPage from "@/components/collections/CollectionPage";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function Page({params} : PageProps) {
    const {slug} = await params;
  return (
    <>
        <CollectionPage slug={slug} />
    </>
  )
}
