# Kataw parser test case

## Input

`````js
foo(a)(b)(c)(d)(e)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "foo(a)(b)(c)(d)(e)",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 66091,
                        "expression": {
                            "kind": 66091,
                            "expression": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 3
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 5
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 6
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 8
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 9
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "intersects": false,
                                "start": 11,
                                "end": 12
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 12
                        },
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 3,
                            "elements": [
                                {
                                    "kind": 196712,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 14
                                }
                            ],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 0,
                            "intersects": false,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 15
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 196712,
                                "text": "e",
                                "rawText": "e",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 18
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

