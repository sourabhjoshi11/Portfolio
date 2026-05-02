export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#e27a1b]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 transition-colors duration-300 dark:text-slate-50 sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 transition-colors duration-300 dark:text-slate-400 sm:text-lg">{description}</p>
    </div>
  )
}