const contacts = "이메일: twincornjr@gmail.com,카카오톡 아이디: xmdnls0505";

const Contact = () => {
  return (
    <div>
      {contacts.split(",").map((contact, index) => (
        <div key={`contact-${index}`}>{contact}</div>
      ))}
    </div>
  );
};
export default Contact;
