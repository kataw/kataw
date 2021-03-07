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
    "kind": 196,
    "source": "({ # })",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196712,
                                        "text": "#",
                                        "rawText": "",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 4
                                    },
                                    "right": null,
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 4
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 4
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 7
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 4,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
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

