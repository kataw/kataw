# Kataw parser test case

## Input

`````js
let {x:y=z}, {a:b=c} = obj;
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
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
            },
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
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "flags": 256,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 10
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 11
                    },
                    {
                        "kind": 190,
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
                                            "start": 14,
                                            "end": 16
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 16,
                                                "end": 17
                                            },
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 768,
                                                "start": 18,
                                                "end": 19
                                            },
                                            "flags": 256,
                                            "start": 16,
                                            "end": 19
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 19
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 14,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 12,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 22,
                            "end": 26
                        },
                        "flags": 128,
                        "start": 12,
                        "end": 26
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "let {x:y=z}, {a:b=c} = obj;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 12,
            "error": "Missing initializer in destructuring declaration",
            "start": 11,
            "end": 12
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

