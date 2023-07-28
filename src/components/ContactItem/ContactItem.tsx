import "./ContactItem.css";

interface ContactItem {
  srcPath: string;
  text: string;
  link?: string;
}

function ContactItem({ srcPath, text, link }: ContactItem) {
  return (
    <div className="contact-cont">
      <img src={srcPath} className="contact-img" />
      {link ? (
        <a href={link} className="contact-link">
          <span className="contact-text">{text}</span>
        </a>
      ) : (
        <span className="contact-text">{text}</span>
      )}
    </div>
  );
}

export default ContactItem;
