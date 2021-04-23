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
                                "flags": 768,
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
                    "flags": 256,
                    "start": 1,
                    "end": 6
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "({ # })",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2,
            "end": 4
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
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

