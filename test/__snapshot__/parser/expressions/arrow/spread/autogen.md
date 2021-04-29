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

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [],
    "isModule": false,
    "source": "#",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 0, end: 1
✖ Private identifiers are not allowed outside class_bodies - start: 0, end: 1

```

