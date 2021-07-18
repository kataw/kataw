# Kataw parser test case

## Input

`````js
(x=(await z)=y)
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
                    "end": 9
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(x=(await z)=y)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 10, end: 11
✖ ')' is not allowed here. Did you mean ';'? - start: 11, end: 12
✖ Declaration or statement expected - start: 12, end: 13
✖ ')' is not allowed here. Did you mean ';'? - start: 14, end: 15

```

