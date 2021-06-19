# Kataw parser test case

## Input

`````js
((...rest: Array<number>) => rest)
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
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [],
                        "flags": 32,
                        "start": 1,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 96,
                        "start": 10,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 16,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 17,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 23,
                    "end": 24
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 24,
                    "end": 24
                },
                "flags": 32,
                "start": 10,
                "end": 24
            },
            "flags": 16,
            "start": 10,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "rest",
                "rawText": "rest",
                "flags": 96,
                "start": 28,
                "end": 33
            },
            "flags": 16,
            "start": 28,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "((...rest: Array<number>) => rest)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 9, end: 10
✖ Identifier expected - start: 24, end: 25
✖ Declaration or statement expected - start: 25, end: 28
✖ Expected a `;` - start: 33, end: 34

```

