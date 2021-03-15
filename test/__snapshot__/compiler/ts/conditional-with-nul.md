# Kataw parser test case

## Input

`````js
let x: number extends string ? boolean : null;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "let x: number extends string ? boolean : null;",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8249,
                            "checkType": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 6,
                                "end": 13
                            },
                            "extendsType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 21,
                                "end": 28
                            },
                            "trueType": {
                                "kind": 4268070,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 30,
                                "end": 38
                            },
                            "falseType": {
                                "kind": 4202655,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 40,
                                "end": 45
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 45
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 45
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 45
            },
            "flags": 8,
            "intersects": false,
            "transformFlags": 769,
            "start": 0,
            "end": 46
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
    "end": 46
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

