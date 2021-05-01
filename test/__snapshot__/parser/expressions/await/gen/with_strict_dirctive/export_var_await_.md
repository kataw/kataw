# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: export var await;
## Input

`````js
'use strict'; export var await;
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
                "kind": 201392131,
                "text": "use strict",
                "original": "'use strict'",
                "rawText": "'use strict'",
                "flags": 4194400,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 13,
                "end": 20
            },
            "declaration": {
                "kind": 155,
                "declareKeyword": null,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 0,
                    "start": 20,
                    "end": 24
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "original": "await",
                                "text": "await",
                                "rawText": " await",
                                "flags": 96,
                                "start": 24,
                                "end": 30
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 24,
                            "end": 30
                        }
                    ],
                    "flags": 16,
                    "start": 24,
                    "end": 30
                },
                "flags": 16,
                "start": 20,
                "end": 31
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 13,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "'use strict'; export var await;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 13, end: 20

```

