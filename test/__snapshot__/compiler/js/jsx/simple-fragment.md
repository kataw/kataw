# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<>Fragment</>
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<>Fragment</>",
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
                    "children": [
                        {
                            "kind": 137,
                            "text": "Fragment",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
                            "parent": null,
                            "start": 2,
                            "end": 10
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 2,
                    "end": 10
                },
                "closingFragment": {
                    "kind": 638,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 10,
                    "end": 13
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 8192,
                "start": 0,
                "end": 13
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
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
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

