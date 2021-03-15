# Kataw parser test case

## Input

`````js
new (x().y)();
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "new (x().y)();",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66204,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67175096,
                        "member": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 6
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "intersects": false,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 10,
                        "period": {
                            "kind": 255,
                            "pos": 8,
                            "end": 9
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 11
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "intersects": false,
                    "start": 12,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 14
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
    "end": 14
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

