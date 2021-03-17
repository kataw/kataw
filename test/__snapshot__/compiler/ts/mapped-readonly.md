# Kataw parser test case

## Input

`````js
  let map: { readonly [P in string]?: number; };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "  let map: { readonly [P in string]?: number; };",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "map",
                            "rawText": "map",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 9
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8335,
                            "typeParameter": {
                                "kind": 134226152,
                                "name": {
                                    "kind": 196711,
                                    "text": "P",
                                    "rawText": "P",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "constraint": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 27,
                                    "end": 34
                                },
                                "defaultType": null,
                                "expression": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 23,
                                "end": 34
                            },
                            "nameType": null,
                            "isReadOnly": true,
                            "plus": false,
                            "minus": false,
                            "isOptional": true,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 37,
                                "end": 44
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 10,
                            "end": 47
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 47
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 47
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

