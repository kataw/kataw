# Kataw parser test case

## Input

`````js
var {x: x, y: y, z: { a: a = 10} } = b;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 7,
                                                "end": 9
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 9
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "flags": 256,
                                        "start": 10,
                                        "end": 15
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 16,
                                            "end": 19
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
                                                            "kind": 204,
                                                            "ellipsisToken": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 768,
                                                                "start": 21,
                                                                "end": 24
                                                            },
                                                            "value": {
                                                                "kind": 203,
                                                                "ellipsisToken": null,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 768,
                                                                    "start": 24,
                                                                    "end": 26
                                                                },
                                                                "initializer": {
                                                                    "kind": 201392130,
                                                                    "text": 10,
                                                                    "rawText": "10",
                                                                    "flags": 768,
                                                                    "start": 28,
                                                                    "end": 31
                                                                },
                                                                "flags": 256,
                                                                "start": 24,
                                                                "end": 31
                                                            },
                                                            "flags": 256,
                                                            "start": 21,
                                                            "end": 31
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 21,
                                                    "end": 31
                                                },
                                                "flags": 256,
                                                "start": 19,
                                                "end": 32
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 19,
                                            "end": 32
                                        },
                                        "flags": 256,
                                        "start": 16,
                                        "end": 32
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 32
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 34
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 36,
                            "end": 38
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 38
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "var {x: x, y: y, z: { a: a = 10} } = b;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

