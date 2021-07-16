# Kataw parser test case

## Input

`````js
(...rest = ...NaN) => {};
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
                    "end": 10
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "NaN",
                "rawText": "NaN",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 14,
            "end": 17
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 24
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 24,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "(...rest = ...NaN) => {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A rest element cannot have an initializer - start: 10, end: 14
✖ Identifier expected - start: 10, end: 14
✖ '; ' expected - start: 17, end: 18
✖ Declaration or statement expected - start: 18, end: 21

```

