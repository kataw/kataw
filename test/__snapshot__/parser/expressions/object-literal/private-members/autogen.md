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
    "directives": [],
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
                                "kind": 67109115,
                                "text": "#",
                                "flags": 96,
                                "start": 2,
                                "end": 4
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 4
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "({ # })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 2, end: 4
✖ Private identifiers are not allowed outside class_bodies - start: 2, end: 4

```

