# Kataw parser test case

## Input

`````js
let x: [string[]?]
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 334,
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 136,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "start": 8,
                                                    "end": 14
                                                },
                                                "flags": 2097152,
                                                "start": 8,
                                                "end": 16
                                            },
                                            "flags": 2097152,
                                            "start": 8,
                                            "end": 16
                                        },
                                        "flags": 2097216,
                                        "start": 8,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 6,
                                "end": 18
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 18
            },
            "flags": 33554448,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "let x: [string[]?]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

let x:  [ ];
```

### Diagnostics

```javascript
✔ No errors
```

