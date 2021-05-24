# Kataw parser test case

## Input

`````js
var key: string = "key";

var { [key]: val2 } = { key: "val" };

var { ["key"]: val3, ...spread } = { key: "val" };
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "key",
                            "rawText": "key",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 8,
                                "end": 15
                            },
                            "flags": 0,
                            "start": 7,
                            "end": 15
                        },
                        "initializer": {
                            "kind": 201392131,
                            "text": "key",
                            "rawText": "\"key\"",
                            "flags": 96,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 24,
                "end": 29
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
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "key",
                                                "rawText": "key",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 36
                                            },
                                            "flags": 32,
                                            "start": 31,
                                            "end": 37
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "val2",
                                            "rawText": "val2",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 43
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 31,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 31,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 29,
                            "end": 45
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 96,
                                            "start": 49,
                                            "end": 53
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "val",
                                            "rawText": "\"val\"",
                                            "flags": 96,
                                            "start": 54,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "start": 49,
                                        "end": 60
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 49,
                                "end": 60
                            },
                            "flags": 48,
                            "start": 47,
                            "end": 62
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 62
                    }
                ],
                "flags": 16,
                "start": 29,
                "end": 62
            },
            "flags": 16,
            "start": 24,
            "end": 63
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 63,
                "end": 68
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
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "key",
                                                "rawText": "\"key\"",
                                                "flags": 96,
                                                "start": 72,
                                                "end": 77
                                            },
                                            "flags": 32,
                                            "start": 70,
                                            "end": 78
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "val3",
                                            "rawText": "val3",
                                            "flags": 96,
                                            "start": 79,
                                            "end": 84
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 70,
                                        "end": 84
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 85,
                                            "end": 89
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "spread",
                                            "rawText": "spread",
                                            "flags": 96,
                                            "start": 89,
                                            "end": 95
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 85,
                                        "end": 95
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 70,
                                "end": 95
                            },
                            "flags": 32,
                            "start": 68,
                            "end": 97
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 96,
                                            "start": 101,
                                            "end": 105
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "val",
                                            "rawText": "\"val\"",
                                            "flags": 96,
                                            "start": 106,
                                            "end": 112
                                        },
                                        "flags": 32,
                                        "start": 101,
                                        "end": 112
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 101,
                                "end": 112
                            },
                            "flags": 48,
                            "start": 99,
                            "end": 114
                        },
                        "flags": 16,
                        "start": 68,
                        "end": 114
                    }
                ],
                "flags": 16,
                "start": 68,
                "end": 114
            },
            "flags": 16,
            "start": 63,
            "end": 115
        }
    ],
    "isModule": false,
    "source": "var key: string = \"key\";\n\nvar { [key]: val2 } = { key: \"val\" };\n\nvar { [\"key\"]: val3, ...spread } = { key: \"val\" };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 115
}
```

### Printed

```javascript

var key = "\"key\"";
var {
  [key]: val2
} = { key: "\"val\"" };
var {
  ["\"key\""]: val3,
  ...spread
} = { key: "\"val\"" };
```

### Diagnostics

```javascript
✔ No errors
```

