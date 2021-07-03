# Kataw parser test case

## Input

`````js
({+2 : x}) = {};
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
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 0,
                    "end": 4
                },
                "flags": 32,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 6,
                "end": 8
            },
            "flags": 16,
            "start": 6,
            "end": 8
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
            "start": 12,
            "end": 15
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 15,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "({+2 : x}) = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 2, end: 3
✖ Expected a ')' to match the '(' token here - start: 5, end: 6
✖ Declaration or statement expected - start: 8, end: 9
✖ Declaration or statement expected - start: 9, end: 10
✖ Declaration or statement expected - start: 10, end: 12

```

