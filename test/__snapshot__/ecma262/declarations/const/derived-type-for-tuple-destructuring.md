# Kataw parser test case

## Input

`````js
const [selected] = ([true]: [boolean]);
`````

## Options

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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "selected",
                                        "rawText": "selected",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 7,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
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
                                                "kind": 24752947,
                                                "flags": 96,
                                                "start": 21,
                                                "end": 25
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 21,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 26
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 147,
                                        "elementTypes": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234254,
                                                    "flags": 2097216,
                                                    "start": 29,
                                                    "end": 36
                                                },
                                                "flags": 2097152,
                                                "start": 29,
                                                "end": 36
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 27,
                                        "end": 37
                                    },
                                    "flags": 2097152,
                                    "start": 27,
                                    "end": 37
                                },
                                "right": null,
                                "flags": 32,
                                "start": 18,
                                "end": 37
                            },
                            "flags": 18,
                            "start": 34,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 38
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 38
            },
            "flags": 33554448,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "const [selected] = ([true]: [boolean]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected '=>' - start: 38, end: 39

```

