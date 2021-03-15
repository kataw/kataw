# Kataw parser test case

## Input

`````js
let union: number | null | undefined;
let intersection: number & string;
let precedence1: number | string & boolean;
let precedence2: number & string | boolean;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let union: number | null | undefined;\nlet intersection: number & string;\nlet precedence1: number | string & boolean;\nlet precedence2: number & string | boolean;",
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
                            "text": "union",
                            "rawText": "union",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 9
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 10,
                                    "end": 17
                                },
                                {
                                    "kind": 4202655,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 19,
                                    "end": 24
                                },
                                {
                                    "kind": 4202735,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 26,
                                    "end": 36
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 17,
                            "end": 36
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 36
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 36
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 37
        },
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
                            "text": "intersection",
                            "rawText": "intersection",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 41,
                            "end": 54
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8312,
                            "types": [
                                {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 55,
                                    "end": 62
                                },
                                {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 64,
                                    "end": 71
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 62,
                            "end": 71
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 71
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 41,
                "end": 71
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 37,
            "end": 72
        },
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
                            "text": "precedence1",
                            "rawText": "precedence1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 76,
                            "end": 88
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 89,
                                    "end": 96
                                },
                                {
                                    "kind": 8312,
                                    "types": [
                                        {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 98,
                                            "end": 105
                                        },
                                        {
                                            "kind": 4268070,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 107,
                                            "end": 115
                                        }
                                    ],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 105,
                                    "end": 115
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 96,
                            "end": 115
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 76,
                        "end": 115
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 76,
                "end": 115
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 72,
            "end": 116
        },
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
                            "text": "precedence2",
                            "rawText": "precedence2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 120,
                            "end": 132
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 8312,
                                    "types": [
                                        {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 133,
                                            "end": 140
                                        },
                                        {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 142,
                                            "end": 149
                                        }
                                    ],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 140,
                                    "end": 149
                                },
                                {
                                    "kind": 4268070,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 151,
                                    "end": 159
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 149,
                            "end": 159
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 120,
                        "end": 159
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 120,
                "end": 159
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 116,
            "end": 160
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
    "end": 160
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

