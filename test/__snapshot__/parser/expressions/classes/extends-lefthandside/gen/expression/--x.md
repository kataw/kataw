# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: --x
## Input

`````js
(class B extends --x {})
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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 1,
                        "start": 0,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 8,
                            "start": 0,
                            "end": 16
                        },
                        "expression": {
                            "kind": 128,
                            "operandToken": {
                                "kind": 196636,
                                "flags": 16,
                                "start": 512,
                                "end": 19
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 19,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 16,
                            "end": 20
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 20
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 22,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "(class B extends --x {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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

