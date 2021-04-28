# Kataw parser test case

## Input

`````js
let [...{x}] = y
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
                "flags": 640,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 5,
                                            "start": 512,
                                            "end": 8
                                        },
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
                                                            "start": 9,
                                                            "end": 10
                                                        },
                                                        "right": null,
                                                        "flags": 256,
                                                        "start": 9,
                                                        "end": 10
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "flags": 256,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 11
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "let [...{x}] = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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

