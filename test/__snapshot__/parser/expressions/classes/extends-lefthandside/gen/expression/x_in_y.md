# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: x in y
## Input

`````js
(class B extends x in y {})
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
                    "kind": 198,
                    "left": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 768,
                            "start": 1,
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
                                "flags": 768,
                                "start": 8,
                                "end": 16
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 16,
                                "end": 18
                            },
                            "typeParameter": null,
                            "flags": 128,
                            "start": 16,
                            "end": 18
                        },
                        "members": {
                            "kind": 277,
                            "elements": [],
                            "flags": 256,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 768,
                        "start": 18,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 25,
                "end": 25
            },
            "flags": 128,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "(class B extends x in y {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 26, end: 27

```

