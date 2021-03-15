# Kataw parser test case

## Input

`````js
for (x of 3) continue
/
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for (x of 3) continue\n/",
    "filename": "",
    "statements": [
        {
            "kind": 2099287,
            "initializer": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 4261540,
                "text": 3,
                "rawText": "3",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 2097212,
                "label": null,
                "flags": 1081344,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 21
            },
            "isAwait": false,
            "flags": 1081344,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 21
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260544,
                "text": "/",
                "flags": 1081344,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 24
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 24
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 24,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

