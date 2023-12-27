type Props = {
  children: React.ReactNode
}

const Carousel: React.FC<Props> = ({ children }) => {
  return <div className="carousel w-full rounded-box h-full">{children}</div>
}

export default Carousel
