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
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "original": "B",
                        "text": "B",
                        "rawText": " B",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 0,
                            "start": 8,
                            "end": 16
                        },
                        "expression": {
                            "kind": 128,
                            "operandToken": {
                                "kind": 196636,
                                "flags": 64,
                                "start": 16,
                                "end": 19
                            },
                            "expression": {
                                "kind": 134299649,
                                "original": "x",
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 19,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 20
                        },
                        "typeParameter": null,
                        "flags": 16,
                        "start": 16,
                        "end": 20
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 32,
                        "start": 22,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "(class B extends --x {})",
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
✖ Expected a `;` - start: 20, end: 22

```

