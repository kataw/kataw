# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> tag`\\08`
> `````

> `````js
> tag`\\01`
> `````

> `````js
> tag`left${0}\\01${1}right`
> `````

> `````js
> tag`\\1${0}right`
> `````

> `````js
> tag`left${0}\\1${1}right`
> `````

> `````js
> tag`\\xg${0}right`
> `````

> `````js
> tag`left${0}\\xg${1}right`
> `````

> `````js
> tag`\\xAg`
> `````

> `````js
> tag`left${0}\\xAg`
> `````

> `````js
> tag`left${0}\\xAg${1}right`
> `````

> `````js
> tag`\\u0`
> `````

> `````js
> tag`left${0}\\u0${1}right`
> `````

> `````js
> tag`\\u0g`
> `````

> `````js
> tag`left${0}\\u0g${1}right`
> `````

> `````js
> tag`left${0}\\u00g`
> `````

> `````js
> tag`left${0}\\u00g${1}right`
> `````

> `````js
> tag`left${0}\\u000g${1}right`
> `````

> `````js
> tag`left${0}\\u{}`
> `````

> `````js
> tag`left${0}\\u{-0}${1}right`
> `````

> `````js
> tag`\\u{g}`
> `````

> `````js
> tag`\\u{g}${0}right`
> `````

> `````js
> tag`left${0}\\u{g}`
> `````

> `````js
> tag`left${0}\\u{g}${1}right`
> `````

> `````js
> tag`\\u{0`
> `````

> `````js
> tag`\\u{0${0}right`
> `````

> `````js
> tag`left${0}\\u{0`
> `````

> `````js
> tag`\\u{110000}${0}right`
> `````

> `````js
> tag`left${0}\\u{110000}`
> `````

> `````js
> tag`left${0}\\u{110000}${1}right`
> `````

> `````js
> tag` ${tag`\\u`}`
> `````

> `````js
> tag` ``\\u`
> `````

> `````js
> tag`\\u``\\u`
> `````

> `````js
> ` ${tag`\\u`}`
> `````

> `````js
> ` ``\\u`
> `````

> `````js
> tag`\\u0`
> `````

### Templates

#### stand alone

`````js
#
`````

#### with strict directive

`````js
'use strict'; #
`````

