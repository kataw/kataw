# Kataw parser test case

## Input

`````js
do async
 f(){}; while (y)
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 8,
                    "end": 11
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 12,
                    "end": 12
                },
                "flags": 268435488,
                "start": 8,
                "end": 13
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 2,
                    "end": 8
                },
                "flags": 16,
                "start": 2,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "start": 13,
            "end": 15
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 15,
            "end": 16
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 16,
                "end": 22
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 24,
                "end": 25
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 26,
                    "end": 26
                },
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "flags": 16,
            "start": 16,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "do async\n f(){}; while (y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 2, end: 8
✖ Missing an opening parentheses - '( - start: 8, end: 11
✖ Declaration or statement expected - start: 13, end: 14
✖ Identifier expected - start: 26, end: 26

```

