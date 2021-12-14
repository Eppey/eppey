exports.handler = async (event) => {
  // allowed domains
  // const ald = process.env.DOMAINALLOWLIST.split(',').map(d => d.trim());

  const { email } = event.request.userAttributes;
  const domain = email.substring(email.indexOf('@') + 1);

  // allow .edu domains
  if (!domain.includes('.edu')) {
    throw new Error(`Invalid email domain: ${domain}`);
  }

  return event;
};
