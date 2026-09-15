export default function Maintenance({ title = "Coming soon" }: { title?: string }) {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-sm">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#7FB8C9]/15 text-2xl">◌</div>
      <h2 className="mb-3 text-2xl font-bold text-[#2C3E50]">{title}</h2>
      <p className="leading-7 text-[#5D737E]">
        Sorry, we are currently on maintenance. We will continue once everything gets started.
        Thank you for your attention and understanding.
      </p>
    </div>
  );
}