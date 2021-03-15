# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
a
!b
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "a\n!b",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 1
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "!",
                "operand": {
                    "kind": 196712,
                    "text": "b",
                    "rawText": "b",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 4
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 4
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1,
            "end": 4
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

