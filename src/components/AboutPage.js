import PageHeading from "./PageHeading";
import SamplePageContent from "./SamplePageContent";

function AboutPage() {
    const heading = "About Little Lemon";
    const subtitle = "Some information about Little Lemon";
 
    return (
        <>
            <PageHeading heading={heading} subtitle={subtitle}/>
            <SamplePageContent />
        </>
    )
}

export default AboutPage
