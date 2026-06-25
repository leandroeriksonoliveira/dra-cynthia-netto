"use client";

type Props = {
  videoId: string;
  title: string;
};

export function YouTubeEmbed({ videoId, title }: Props) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div className="overflow-hidden rounded-xl border border-ink/10 bg-ink/5">
      <iframe
        title={title}
        src={src}
        className="aspect-video w-full min-h-[240px] border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
