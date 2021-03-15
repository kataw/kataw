# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<input disabled />
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<input disabled />",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 69766,
                "tagName": {
                    "kind": 129,
                    "text": "input",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 1,
                    "end": 6
                },
                "attributes": {
                    "kind": 123,
                    "attributesList": [
                        {
                            "kind": 122,
                            "name": {
                                "kind": 129,
                                "text": "disabled",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 6,
                                "end": 15
                            },
                            "initializer": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
                            "start": 6,
                            "end": 15
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 6,
                    "end": 15
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 8192,
                "start": 0,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
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
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

