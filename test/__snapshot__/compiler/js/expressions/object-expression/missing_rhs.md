# Kataw parser test case

## Input

`````js
wrap({async [foo""](){}});
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "wrap({async [foo\"\"](){}});",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "wrap",
                        "rawText": "wrap",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 4
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65591,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 16
                                            },
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 131073,
                                            "start": 11,
                                            "end": 16
                                        },
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 4261583,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "right": {
                                                "kind": 131322,
                                                "text": "",
                                                "flags": 6,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 18
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 18
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 18
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 2,
                        "intersects": false,
                        "start": 6,
                        "end": 18
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65545,
                    "elements": [],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 22
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 23
            },
            {
                "kind": 6291526,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 25,
                "end": 26
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 26
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 24,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

