import { FooterContainer, LinksContainer, TextContainer, LinkWithHover } from "./footer.styles";

const Footer = () => {
  return(
    <FooterContainer>
      <TextContainer>
        <h2>m. club</h2>
        <p>A project built with React functional components, Redux for state management and Firebase for data storage.</p>
      </TextContainer>
      <LinksContainer>
        <ul>
          <li><LinkWithHover href="#" alt="newsletter" color="white">Newsletter</LinkWithHover></li>
          <li><LinkWithHover href="#" alt="delivery and returns information" color="white">Delivery & Returns</LinkWithHover></li>
          <li><LinkWithHover href="#" alt="contact" color="white">Contact</LinkWithHover></li>
          <li><LinkWithHover href="#" alt="newsletter" color="white">Privacy Policy</LinkWithHover></li>
        </ul>
      </LinksContainer>

    </FooterContainer>
  )
}

export default Footer;
