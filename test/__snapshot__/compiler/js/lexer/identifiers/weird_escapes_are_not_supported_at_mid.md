# Kataw parser test case

## Input

`````js
xxx\Axxx
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "xxx\\Axxx",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "xxx",
                "rawText": "xxx",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "Axxx",
                "rawText": "Axxx",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 4,
            "end": 8
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 3,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

