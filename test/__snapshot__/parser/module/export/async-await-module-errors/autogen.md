# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> export default (async function await() {})
> `````

> `````js
> export default async function await() {
> `````

> `````js
> export async function await() {}
> `````

> `````js
> export async function() {}
> `````

> `````js
> export async
> `````

> `````js
> export async\nfunction async() { await 1; }
> `````

### Templates

#### stand-alone

`````js
#
`````
