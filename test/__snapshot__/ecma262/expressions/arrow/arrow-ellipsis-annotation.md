# Kataw parser test case

## Input

`````js
(...{a}: symbol) => x
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
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 7
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "symbol",
                "rawText": "symbol",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "(...{a}: symbol) => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 7, end: 8
✖ ')' is not allowed here. Did you mean ';'? - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 19

```

