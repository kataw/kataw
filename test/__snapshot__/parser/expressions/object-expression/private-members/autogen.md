# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> a: class { #a = 1 }
> `````

> `````js
> a: class { #a = () => {} }
> `````

> `````js
> a: class { #a }
> `````

> `````js
> a: class { #a() { } }
> `````

> `````js
> a: class { set #a(foo) { } }
> `````

> `````js
>  a: class { async #a() { } }
> `````

> `````js
> a: class { async *#a() { } }
> `````

### Templates

#### object_expr

`````js
({ # })
`````

#### obj_expr_strict

`````js
'use strict'; ({ # });
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 81921,
                                "value": "#",
                                "autofix": 0,
                                "flags": 768,
                                "start": 2,
                                "end": 4
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 4
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 6
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "({ # })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 4
        }
    ],
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

