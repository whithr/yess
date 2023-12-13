import { IdCardIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/Button'

export function Donate() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <IdCardIcon className="h-6 w-6 flex-none text-zinc-400 " />
        <span className="ml-3">Every dollar counts</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Your donation will go to directly to helping those who lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
        libero. Sed cursus ante dapibus diam. Sed nisi.{' '}
      </p>

      <div className="mt-6 flex">
        <Button type="submit" className="flex-none">
          Donate
        </Button>
      </div>
    </form>
  )
}
