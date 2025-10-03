export default function Header({
  header: { name, title, mail, phone, links, location },
}: {
  header: {
    name: string;
    title: string;
    mail: string;
    phone: string;
    links: { url: string; label: string }[];
    location: { url: string; label: string };
  };
}) {
  return (
    <header>
      {/* Name */}
      <div className="text-center">
        <h1 className="font-times text-[32px] font-normal leading-[32px] mb-1">
          {name}
        </h1>
      </div>

      {/* Title */}
      <div className="text-center mb-1">
        <p className="font-times text-[14px] font-normal leading-[14px]">
          {title}
        </p>
      </div>

      {/* Contact Info - Line 1 */}
      <div className="text-center mb-1">
        <p className="font-times text-[12px] font-normal leading-[12px]">
          <a
            href={`mailto:${mail}`}
            className="text-blue-950 dark:text-blue-500"
            target="_blank"
          >
            {mail}
          </a>
          <span> | </span>
          <a
            href={`https://wa.me/+91${phone}`}
            className="text-blue-950 dark:text-blue-500"
            target="_blank"
          >
            +91-{phone}
          </a>
          <span> | </span>
          <a href={location.url} target="_blank">
            {location.label}
          </a>
        </p>
      </div>

      {/* Contact Info - Line 2 */}
      <div className="text-center">
        <p>
          {links.map((link, index, arr) => (
            <span key={index}>
              <a
                href={link.url}
                className="text-blue-950 dark:text-blue-500"
                target="_blank"
              >
                {link.label}
              </a>
              {index < arr.length - 1 && <span>&nbsp;|&nbsp;</span>}
            </span>
          ))}
        </p>
      </div>
    </header>
  );
}
