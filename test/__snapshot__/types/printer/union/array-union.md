# Kataw parser test case

## Input

`````js
let arr: (number|string)[] = [];
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
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 7
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 16
                                            },
                                            {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 23
                                            }
                                        ],
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 23
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 24
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 26
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 26
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 28,
                            "end": 31
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 31
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "let arr: (number|string)[] = [];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
let arr: (number | string)[] = [];
```

### Diagnostics

```javascript
✔ No errors
```

