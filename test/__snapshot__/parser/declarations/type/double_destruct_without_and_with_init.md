# Kataw parser test case

## Input

`````js
var {x, y = z} = obj;
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
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 6
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "flags": 256,
                                        "start": 7,
                                        "end": 13
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 13
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 768,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "var {x, y = z} = obj;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

