# Kataw parser test case

## Input

`````js
const a = new A<B>();
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const a = new A<B>();",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 5,
                                "end": 7
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "typeArguments": {
                                        "kind": 8419,
                                        "typeArgumentsList": [
                                            {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "B",
                                                    "rawText": "B",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 16,
                                                    "end": 17
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 16,
                                                "end": 18
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 15,
                                    "end": 20
                                },
                                "typeArguments": null,
                                "argumentList": null,
                                "flags": 9,
                                "intersects": false,
                                "transformFlags": 32,
                                "start": 0,
                                "end": 20
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 20
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 20
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 21
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 21
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
