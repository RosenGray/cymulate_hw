import Button from "../../components/Button/Button";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import Footer from "../../components/Footer/Footer";
import GetInTouchWithUs from "../../components/GetInTouchWithUs/GetInTouchWithUs";
import GlobalLocation from "../../components/GlobalLocation/GlobalLocation";
import Header from "../../components/Header/Header";
import SyledContactPage, { ContactUs, Content, DemoBlock, Paragraph, SlideBar, Title } from "./ContactPage.styles";



const ContactPage = () => {
    return <SyledContactPage>
        <Header/>
        <ContactUs>
            <Content>
                <DemoBlock>
                    <Title>Contact <br/> Us</Title>
                    <Paragraph>
                        Please complete the request form
                        <br/>
                        and we will contact you shortly
                    </Paragraph>
                    <Button>REQUEST 1:1 Demo</Button>
                </DemoBlock>
              <ContactUsForm/>
            </Content>
        </ContactUs>
        <SlideBar/>
        <GetInTouchWithUs/>
        <GlobalLocation/>
        <Footer/>
    </SyledContactPage>
}

export default ContactPage;