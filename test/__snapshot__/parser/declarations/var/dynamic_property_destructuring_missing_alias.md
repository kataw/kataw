# Kataw parser test case

## Input

`````js
var {[x]} = z;
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
                                                "kind": 81921,
                                                "text": "x",
                                                "rawText": "x",
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
                                                "kind": 16637,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 8,
                                                "end": 8
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 8,
                                            "end": 8
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 8
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": "z",
                            "rawText": "z",
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "var {[x]} = z;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 8,
            "end": 9
        }
    ],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

