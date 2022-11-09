export type FutureTapeButtonProps = {
  /**
   * Class name to override styles on the link
   * Type: string
   */
  className?: string
  /**
   * curationContract: Curation manager contract address
   * Type: string
   */
  curationContract?: string
  /**
   * href: link to a specific tag
   */
  href?: string
  /**
   * text: Text to display on the link
   * Type: string
   * Default: "Listen on Future Tape ↗︎"
   */
  text?: string
  /**
   * color: Color to set the button's text & hover border
   * Type: string
   * Default black
   */
  color?: string
}

const FUTURE_TAPE_ADDRESS = 'https://futuretape.xyz/tag/'

export function FutureTapeButton(props: FutureTapeButtonProps) {
  const { className, text = 'Listen on Future Tape ↗︎', href, color = 'black' } = props

  return (
    <a
      className={
        className ??
        `future-tape-btn relative inline-block max-w-fit text-[color:var(--future-tape-color)] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[color:var(--future-tape-color)] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.86,0,0.07,1)] hover:after:origin-bottom-left hover:after:scale-x-100`
      }
      style={{
        ['--future-tape-color' as string]: color,
      }}
      href={FUTURE_TAPE_ADDRESS + href}
      target="_blank"
      rel="noreferrer">
      {text}
    </a>
  )
}
