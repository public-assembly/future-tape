import { FutureTapeButton } from '@public-assembly/future-tape'

function Page() {
  return (
    <section className="flex flex-col gap-4">
      <FutureTapeButton href="present+material" />
      <FutureTapeButton href="present+material" color="pink" />
    </section>
  )
}

export default Page
