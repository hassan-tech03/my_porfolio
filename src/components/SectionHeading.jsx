import Reveal from './Reveal';

function SectionHeading({ title, description }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-brand" />
      {description && (
        <p className="mt-5 text-base leading-relaxed text-fg-3">{description}</p>
      )}
    </Reveal>
  );
}

SectionHeading.Inline = function Inline({ title, description }) {
  return (
    <Reveal>
      <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-gradient-brand" />
      <p className="mt-4 text-base text-fg-3">{description}</p>
    </Reveal>
  );
};

export default SectionHeading;
