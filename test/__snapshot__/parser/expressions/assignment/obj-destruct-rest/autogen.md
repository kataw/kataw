# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

#### Bad cases

> `````js
> ({...obj1,} = foo)
> `````

> `````js
> ({...obj1,a} = foo)
> `````

> `````js
> ({...obj1,...obj2} = foo)
> `````

> `````js
> ({...(a,b)} = foo)
> `````

> `````js
> ({...{}} = {})
> `````

#### Good cases

> `````js
> ({...(obj)} = foo)
> `````

> `````js
> ({...obj} = foo)
> `````

> `````js
> ({...obj.x} = foo)
> `````

> `````js
> ({...{}.x} = foo)
> `````

> `````js
> ({...[].x} = foo)
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

