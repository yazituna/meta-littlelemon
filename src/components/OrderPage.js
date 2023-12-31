import PageHeading from "./PageHeading";
import SamplePageContent from "./SamplePageContent";

function OrderPage() {
    const heading = "Order Online";
    const subtitle = "Some Order Alternatives";
    return (
        <>
            <PageHeading heading={heading} subtitle={subtitle}/>
            <SamplePageContent />
        </>
    )
}

export default OrderPage
