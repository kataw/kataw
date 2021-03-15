# Kataw parser test case

## Input

`````js
({ __proto__, __proto__: null })
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ __proto__, __proto__: null })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 196711,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 12
                            },
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 196711,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 29
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 29
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 31
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

