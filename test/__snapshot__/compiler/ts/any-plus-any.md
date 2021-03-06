# Kataw parser test case

## Input

`````js
var x: any;
x.name = "hello";
var z = x + x;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var x: any;\nx.name = \"hello\";\nvar z = x + x;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
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
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 6,
                                "end": 10
                            },
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 10
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 10
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 66232,
                        "member": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "name",
                            "rawText": "name",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 18
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 18,
                        "period": {
                            "kind": 254,
                            "pos": 13,
                            "end": 14
                        }
                    },
                    "operator": "=",
                    "right": {
                        "kind": 4261583,
                        "text": "hello",
                        "rawText": "hello",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 28
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 28
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 29
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "z",
                                "rawText": "z",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 33,
                                "end": 35
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 43
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 43
                            },
                            "flags": 33,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 43
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 43
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 29,
                "end": 44
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 44
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

