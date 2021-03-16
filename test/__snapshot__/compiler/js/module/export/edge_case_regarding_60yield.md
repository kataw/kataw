# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default yield x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export default yield x",
    "filename": "",
    "statements": [
        {
            "kind": 77,
            "declaration": {
                "kind": 196712,
                "text": "yield",
                "rawText": "yield",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 20
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 22
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 21,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

