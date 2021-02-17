# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> ({a:b,...obj}) => {}
> `````

> `````js
> ({...obj} = {}) => {}
> `````

> `````js
> ({...(a,b),c})
> `````

> `````js
> ({...a,b,c})
> `````

> `````js
> ({...(obj)}) => {}
> `````

> `````js
> ({...(a,b)}) => {}
> `````

> `````js
> ({...{a,b}}) => {}
> `````

> `````js
> ({...[a,b]}) => {}
> `````

### Templates

#### case

`````js
#
`````
