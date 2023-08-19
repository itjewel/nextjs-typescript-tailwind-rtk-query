
interface PlayerTypes {
    title: string;
    link: string;
}
export const Player: React.FC<PlayerTypes> = ({title, link}) => {
  return (
       <iframe
            width="100%"
            className="aspect-video"
            src={link}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
  )
}
