# Kataw parser test case

## Input

`````js
const [a=[...b], ...c] = obj;
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
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
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
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 223,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 0,
                                                            "start": 10,
                                                            "end": 13
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 13,
                                                            "end": 14
                                                        },
                                                        "flags": 32,
                                                        "start": 10,
                                                        "end": 14
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 10,
                                                "end": 14
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 15
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 16,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": " obj",
                            "flags": 96,
                            "start": 24,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 28
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 28
            },
            "flags": 33554448,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "const [a=[...b], ...c] = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
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

