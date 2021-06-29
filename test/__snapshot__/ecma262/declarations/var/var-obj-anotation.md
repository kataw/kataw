# Kataw parser test case

## Input

`````js
var {x}: {x: string; } = { x: "hello" };
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 7
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 12,
                                                "end": 19
                                            },
                                            "flags": 2097152,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "flags": 2097152,
                                        "start": 10,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 8,
                                "end": 22
                            },
                            "flags": 2097152,
                            "start": 8,
                            "end": 22
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "hello",
                                            "rawText": "\"hello\"",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 26,
                                "end": 37
                            },
                            "flags": 48,
                            "start": 24,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "var {x}: {x: string; } = { x: \"hello\" };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

var {
  x
}:  = { x: "\"hello\"" };
```

### Diagnostics

```javascript
✔ No errors
```

