# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<earth.america />
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<earth.america />",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 69766,
                "tagName": {
                    "kind": 67109000,
                    "member": {
                        "kind": 129,
                        "text": "america",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 8192,
                        "start": 7,
                        "end": 14
                    },
                    "expression": {
                        "kind": 129,
                        "text": "earth",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 8192,
                        "start": 1,
                        "end": 6
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 1,
                    "end": 14
                },
                "attributes": {
                    "kind": 123,
                    "attributesList": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 14,
                    "end": 14
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 8192,
                "start": 0,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
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
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

