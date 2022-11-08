import { FutureTapeButton } from '@public-assembly/future-tape'

export function ExampleImports() {
  return (
    <section className="flex flex-col gap-4">
      <FutureTapeButton href="present+material" color="#F2F" />
      <FutureTapeButton
        href="present+material"
        className="p-4 border border-gray-200 border-solid"
      />
      <FutureTapeButton href="present+material" text="Future Tape" />
    </section>
  )
}
