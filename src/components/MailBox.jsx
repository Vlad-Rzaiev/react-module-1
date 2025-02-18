export default function MailBox({ username, messages }) {
  return (
    <>
      <p>Hello {username}</p>
      <p>
        {messages.length > 0
          ? `You have ${messages.length} unread messages`
          : 'No unread messages'}
      </p>
    </>
  );
}
