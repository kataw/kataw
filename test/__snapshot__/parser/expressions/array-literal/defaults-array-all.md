# Kataw parser test case

## Input

`````js
var [x = 10, y = 5, z = 1] = a;
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
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 11
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 5,
                                            "rawText": "5",
                                            "flags": 768,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "flags": 256,
                                        "start": 12,
                                        "end": 18
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 256,
                                        "start": 19,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 25
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 28,
                            "end": 30
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 30
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "var [x = 10, y = 5, z = 1] = a;",
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
✔ No errors
```

