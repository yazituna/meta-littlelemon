import PageHeading from "./PageHeading";
import SamplePageContent from "./SamplePageContent";

function MenuPage() {
    const heading = "Menu";
    const subtitle = "Some Menu Items";
    return (
        <>
            <PageHeading heading={heading} subtitle={subtitle}/>
            <SamplePageContent />
        </>
    )
}

export default MenuPage
