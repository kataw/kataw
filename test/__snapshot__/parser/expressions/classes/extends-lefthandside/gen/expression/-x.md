# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: n
> :: test: expression
> :: case: -x
## Input

`````js
(class B extends -x {})
`````
## Output

### CST

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
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 8,
                                "end": 16
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 35379,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 18
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 19
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 16,
                            "end": 19
                        },
                        "body": {
                            "kind": 262,
                            "elements": [],
                            "flags": 32,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 8,
                        "start": 32,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "(class B extends -x {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 16, end: 19

```

