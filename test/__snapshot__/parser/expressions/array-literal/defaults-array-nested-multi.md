# Kataw parser test case

## Input

`````js
var [x = 10, [ z ]] = a;
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
                "flags": 768,
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
                                            "kind": 134299649,
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
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 202,
                                                "elements": [
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 768,
                                                            "start": 14,
                                                            "end": 16
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 14,
                                                        "end": 16
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "flags": 256,
                                            "start": 12,
                                            "end": 18
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "var [x = 10, [ z ]] = a;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

