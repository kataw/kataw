# Kataw parser test case

## Input

`````js
var {[2]: y = 1} = {2:3}
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
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 768,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "flags": 256,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 9,
                                                "end": 11
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 768,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "flags": 256,
                                            "start": 9,
                                            "end": 15
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 15
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 15
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 16
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
                                        "left": {
                                            "kind": 134299649,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 768,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 768,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "flags": 256,
                                        "start": 20,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 24
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "var {[2]: y = 1} = {2:3}",
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

