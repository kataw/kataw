# Kataw parser test case

## Input

`````js
var j;
var f: () => any;
<any>( /* Preserve */ j = f());

`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var j;\nvar f: () => any;\n<any>( /* Preserve */ j = f());\n",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "j",
                            "rawText": "j",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 5
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 5
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 10,
                            "end": 12
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8287,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134226095,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 15,
                                "end": 15
                            },
                            "returnType": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 19,
                                "end": 23
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 23
                        },
                        "initializer": null,
                        "flags": 10,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 23
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 23
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 6,
            "end": 24
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 134291684,
                "type": {
                    "kind": 4202498,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 26,
                    "end": 29
                },
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65550,
                        "left": {
                            "kind": 196712,
                            "text": "j",
                            "rawText": "j",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 48
                        },
                        "operator": "=",
                        "right": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "f",
                                "rawText": "f",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 52
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "intersects": false,
                                "start": 54,
                                "end": 54
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 54
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 54
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 55
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 24,
                "end": 55
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 24,
            "end": 56
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
    "end": 57
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

