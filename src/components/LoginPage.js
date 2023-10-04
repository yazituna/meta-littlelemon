import PageHeading from "./PageHeading";
import SamplePageContent from "./SamplePageContent";

function LoginPage() {
    const heading = "Login";
    const subtitle = "Some Login Forms";
    return (
        <>
            <PageHeading heading={heading} subtitle={subtitle}/>
            <SamplePageContent />
        </>
    )
}

export default LoginPage
