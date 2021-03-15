# Kataw parser test case

## Input

`````js
(new x ** 2)
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(new x ** 2)",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 66204,
                        "expression": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "typeArguments": null,
                        "argumentList": null,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 32,
                        "start": 0,
                        "end": 6
                    },
                    "operator": "**",
                    "right": {
                        "kind": 4261540,
                        "text": 2,
                        "rawText": "2",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2,
                    "start": 1,
                    "end": 11
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 12
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
    "end": 12
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

