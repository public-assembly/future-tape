import { FutureTapeButton } from '@public-assembly/future-tape'

function Page() {
  return (
    <section className="flex flex-col gap-4">
      <FutureTapeButton href="tag/present+material" />
      <FutureTapeButton href="tag/present+material" color="pink" />
    </section>
  )
}

export default Page
