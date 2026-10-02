import CollectionToolbar from "./CollectionToolbar";

type CollectionHeaderProps = {
    productCount: number;
}

export default function CollectionHeader({productCount} : CollectionHeaderProps) {
  return (
    <div className="flex items-center justify-between md:pt-9">
        <p className="text-[#393939] hidden md:block">
            {productCount} products
        </p>
        <CollectionToolbar/>
    </div>
  )
}
