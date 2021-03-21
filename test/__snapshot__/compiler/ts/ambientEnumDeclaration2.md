# Kataw parser test case

## Input

`````js
declare enum E {
    a, // E.a
    b, // E.b
}

declare const enum E1 {
    a, // E.a = 0
    b, // E.b = 1
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare enum E {\n    a, // E.a\n    b, // E.b\n}\n\ndeclare const enum E1 {\n    a, // E.a = 0\n    b, // E.b = 1\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E",
                "rawText": "E",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 14
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "a",
                            "rawText": "a",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 22
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 16,
                        "end": 22
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "b",
                            "rawText": "b",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 36
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 23,
                        "end": 36
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 16,
                "end": 37
            },
            "isConst": false,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 7,
            "end": 46
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "enum",
                "rawText": "enum",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 66
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "E1",
                            "rawText": "E1",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 69
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 66,
                        "end": 69
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 66,
                "end": 69
            },
            "isConst": true,
            "flags": 402653185,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 55,
            "end": 69
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 65590,
                            "expressions": [
                                {
                                    "kind": 196712,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 77
                                },
                                {
                                    "kind": 196712,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 95
                                },
                                {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 96,
                                    "end": 96
                                }
                            ],
                            "flags": 32769,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 96
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 71,
                        "end": 96
                    }
                ],
                "multiline": true,
                "flags": 32769,
                "symbol": null,
                "transformFlags": 0,
                "start": 71,
                "end": 96
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 69,
            "end": 109
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 67,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An enum member name must be followed by a ',', '=', or '}'.",
            "start": 70,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 108,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 109
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

