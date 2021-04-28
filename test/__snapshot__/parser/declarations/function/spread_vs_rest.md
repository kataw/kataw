# Kataw parser test case

## Input

`````js
let [a=[...b], ...c] = obj;
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
                                            "flags": 768,
                                            "start": 5,
                                            "end": 6
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
                                                            "flags": 768,
                                                            "start": 8,
                                                            "end": 11
                                                        },
                                                        "argument": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 768,
                                                            "start": 11,
                                                            "end": 12
                                                        },
                                                        "flags": 256,
                                                        "start": 8,
                                                        "end": 12
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 8,
                                                "end": 12
                                            },
                                            "flags": 256,
                                            "start": 7,
                                            "end": 13
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 13
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 768,
                                            "start": 14,
                                            "end": 18
                                        },
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 3,
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
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 26
            },
            "flags": 0,
            "start": 128,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "let [a=[...b], ...c] = obj;",
    "fileName": "__root__",
    "flags": 0,
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
✔ No errors
```

