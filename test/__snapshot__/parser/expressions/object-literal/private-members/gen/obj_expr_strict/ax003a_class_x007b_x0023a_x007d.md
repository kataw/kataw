# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: obj_expr_strict
> :: case: a: class { #a }
## Input

`````js
'use strict'; ({ a: class { #a } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
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
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 19,
                                        "end": 25
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": null,
                                    "members": {
                                        "kind": 277,
                                        "elements": [
                                            {
                                                "kind": 280,
                                                "decorators": null,
                                                "declaredToken": null,
                                                "staticToken": null,
                                                "asyncKeyword": null,
                                                "key": {
                                                    "kind": 67109115,
                                                    "text": "#a",
                                                    "flags": 96,
                                                    "start": 27,
                                                    "end": 30
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 27,
                                                "end": 30
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 27,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 32
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 16,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 34
                },
                "flags": 32,
                "start": 13,
                "end": 35
            },
            "flags": 16,
            "start": 13,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "'use strict'; ({ a: class { #a } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

