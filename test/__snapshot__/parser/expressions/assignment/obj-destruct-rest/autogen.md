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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "#",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 1
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 1
        }
    ],
    "isModule": false,
    "text": "#",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 1
        }
    ],
    "start": 0,
    "end": 1
}
```

### Printed

```javascript
 test case

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
```

### Diagnostics

```javascript
 test case

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
```

