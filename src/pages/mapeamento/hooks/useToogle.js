import { useCallback, useState } from "react"

export default function useToogle(initialBoolValue) {
  const [state, setState] = useState(initialBoolValue)

  const toogle = useCallback(() => setState((state) => !state), [state])

  return [state, toogle]
}
