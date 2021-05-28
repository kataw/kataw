# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: o
> :: test: do
> :: case: a instanceof b + c
## Input

`````js
do a instanceof b + c while (x);
`````
## Output

### CST

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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 29,
                "end": 30
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 21,
                "end": 27
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 2,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 64,
                            "start": 4,
                            "end": 15
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 17,
                        "end": 19
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 21
                },
                "flags": 16,
                "start": 2,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "do a instanceof b + c while (x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 21, end: 27

```

