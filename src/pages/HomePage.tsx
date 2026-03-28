import { Button } from '@/components/ui/button'
import { useStore } from '@/store/useStore'

export function HomePage() {
  const count = useStore((state) => state.count)
  const inc = useStore((state) => state.inc)
  const dec = useStore((state) => state.dec)

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold">Vibe Coding Template</h1>
      <p className="text-muted-foreground">
        React + TypeScript + Tailwind + shadcn/ui + Router + Zustand + ESLint +
        Prettier
      </p>

      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={dec}>
          -1
        </Button>
        <span className="rounded border px-3 py-2 text-sm">count: {count}</span>
        <Button onClick={inc}>+1</Button>
      </div>
    </div>
  )
}
