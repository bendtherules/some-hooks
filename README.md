# some-hooks

> Collection of some reusable hooks that I use

[![NPM](https://img.shields.io/npm/v/some-hooks.svg)](https://www.npmjs.com/package/some-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save some-hooks
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'some-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [bendtherules](https://github.com/bendtherules)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
