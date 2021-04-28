# Kataw parser test case

## Input

`````js
let o = {*f(await){}}
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
                            "kind": 134299649,
                            "text": "o",
                            "rawText": "o",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 768,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 215,
                                                    "ellipsisToken": null,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 768,
                                                        "start": 12,
                                                        "end": 17
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 256,
                                                    "start": 12,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 1280,
                                            "start": 12,
                                            "end": 18
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 19,
                                                "end": 19
                                            },
                                            "flags": 256,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 1280,
                                        "start": 11,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 9,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 21
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 21
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 21
            },
            "flags": 0,
            "start": 128,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "let o = {*f(await){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
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

