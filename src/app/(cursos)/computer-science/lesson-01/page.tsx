//https://developers.google.com/youtube/player_parameters?hl=pt-br#Parameters

export default function ComputerScience() {
  return (
    <>
      <h1>Ciência da Computação</h1>
      <div className="video">
        <iframe
          width="720"
          height="324"
          src="https://www.youtube.com/embed/zDVCdEmnLu0?si=zgEqxDSWpKjoAF4R&controls=2&enablejsapi=1&iv_laod_policy=3&modestbranding=1&origin=https://code-it.club&playsinline=1&rel=0&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
    </>
  )
}
