import * as styles from './FutureTapeButton.module.css'

export type FutureTapeButtonProps = {
  /**
   * Class name to style the link
   * Type: string
   * Default: ""
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
   * Default #000
   */
  color?: string
}

const FUTURE_TAPE_ADDRESS = 'https://futuretape.xyz/tag/'

export function FutureTapeButton(props: FutureTapeButtonProps) {
  const { className, text = 'Listen on Future Tape ↗︎', href, color = '#000' } = props

  return (
    <a
      className={className ?? styles.btn}
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
