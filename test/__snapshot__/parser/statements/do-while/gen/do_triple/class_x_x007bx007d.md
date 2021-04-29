# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: class x {}
## Input

`````js
do do do class x {} while while while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 37,
                "end": 37
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 31,
                "end": 37
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 31,
                    "end": 31
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 25,
                    "end": 31
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 25,
                        "end": 25
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 0,
                        "start": 19,
                        "end": 25
                    },
                    "statement": {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "typeParameters": null,
                        "classHeritage": null,
                        "members": {
                            "kind": 277,
                            "elements": [],
                            "flags": 32,
                            "start": 18,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 19
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 25
                },
                "flags": 16,
                "start": 2,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "do do do class x {} while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Class declarations are not allowed in an arbitrary statement position. - start: 8, end: 14
✖ Expression expected - start: 25, end: 31
✖ Expression expected - start: 31, end: 37
✖ Expression expected - start: 37, end: 37

```

