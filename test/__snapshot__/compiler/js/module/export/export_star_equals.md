# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export *= from 'f';
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export *= from 'f';",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "from",
                "rawText": "from",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 9,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "f",
                "rawText": "f",
                "flags": 33554433,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 19
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 15,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

