# Kataw parser test case

## Input

`````js
var { ...{ x = 5 } } = {x : 1};
`````

## Output

### Hybrid CST

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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 5,
                                            "end": 9
                                        },
                                        "key": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 68,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 222,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 10,
                                                                "end": 12
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 5,
                                                                "rawText": "5",
                                                                "flags": 96,
                                                                "start": 14,
                                                                "end": 16
                                                            },
                                                            "flags": 32,
                                                            "start": 10,
                                                            "end": 16
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 10,
                                                    "end": 16
                                                },
                                                "flags": 32,
                                                "start": 9,
                                                "end": 18
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 9,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 20
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
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 24,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 24,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "var { ...{ x = 5 } } = {x : 1};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The binding pattern is not destructible - start: 9, end: 10
✖ Binding identifier expected - start: 9, end: 10

```

