# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<></>
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<></>",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66176,
                "openingFragment": {
                    "kind": 133,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 2
                },
                "children": {
                    "kind": 124,
                    "children": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 2,
                    "end": 2
                },
                "closingFragment": {
                    "kind": 638,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 2,
                    "end": 5
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 8192,
                "start": 0,
                "end": 5
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 5
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
    "end": 5
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

