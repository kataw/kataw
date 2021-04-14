# Kataw parser test case

## Input

`````js
const {a, [x]: y} = a;
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
            "kind": 162,
            "lexicalKeyword": null,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 81921,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 7,
                                        "end": 8
                                    },
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
                                                "start": 11,
                                                "end": 12
                                            },
                                            "flags": 256,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 9,
                                        "end": 16
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 7,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 128,
                        "start": 5,
                        "end": 21
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "const {a, [x]: y} = a;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 5
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

