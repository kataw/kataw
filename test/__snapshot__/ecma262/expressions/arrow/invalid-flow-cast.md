# Kataw parser test case

## Input

`````js
([x: string]: number);
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 11
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 11
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 2,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 11
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 12
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 20
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 20
                    },
                    "right": null,
                    "flags": 32,
                    "transformFlags": 4096,
                    "start": 0,
                    "end": 20
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "([x: string]: number);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected '=>' - start: 21, end: 22

```

