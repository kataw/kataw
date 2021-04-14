# Kataw parser test case

## Input

`````js
const {x,} = obj;
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 7,
                                        "end": 8
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": true,
                                "flags": 256,
                                "start": 7,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 5,
                        "end": 16
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "const {x,} = obj;",
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
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

