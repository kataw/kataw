# Kataw parser test case

## Input

`````js
const arr = [0, ...[,,,]];
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 14
                                    },
                                    {
                                        "kind": 223,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 19
                                        },
                                        "argument": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 230,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 20,
                                                        "end": 20
                                                    },
                                                    {
                                                        "kind": 230,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 21
                                                    },
                                                    {
                                                        "kind": 230,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 22,
                                                        "end": 22
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 23
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 19,
                                            "end": 24
                                        },
                                        "flags": 1073741856,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 24
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 11,
                            "end": 25
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 25
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 25
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "const arr = [0, ...[,,,]];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
const arr = [0, ...[, , ,]];
```

### Diagnostics

```javascript
✔ No errors
```

