# Kataw parser test case

## Input

`````js
const x: X<never>;
Observable.empty<never>();
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const x: X<never>;\nObservable.empty<never>();",
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 5,
                                "end": 7
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 10
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 4202651,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 11,
                                            "end": 16
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 11,
                                    "end": 16
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 8,
                                "end": 18
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 17
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 17
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 18
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 66232,
                        "member": {
                            "kind": 196712,
                            "text": "Observable",
                            "rawText": "Observable",
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 29
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "empty",
                            "rawText": "empty",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 35
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 35,
                        "period": {
                            "kind": 254,
                            "pos": 29,
                            "end": 30
                        }
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202651,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 36,
                                "end": 41
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 36,
                        "end": 42
                    },
                    "argumentList": {
                        "kind": 3,
                        "elements": [],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "start": 43,
                        "end": 43
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 35,
                    "end": 44
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 18,
                "end": 45
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 45
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

