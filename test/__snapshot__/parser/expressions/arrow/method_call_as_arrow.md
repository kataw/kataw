# Kataw parser test case

## Input

`````js
({ident: [foo, bar].join("")}) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 30,
                    "start": 0,
                    "end": 33
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 768,
                                                            "start": 10,
                                                            "end": 13
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 768,
                                                            "start": 14,
                                                            "end": 18
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 10,
                                                    "end": 18
                                                },
                                                "flags": 256,
                                                "start": 8,
                                                "end": 19
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "join",
                                                "rawText": "join",
                                                "flags": 768,
                                                "start": 20,
                                                "end": 24
                                            },
                                            "flags": 256,
                                            "start": 2,
                                            "end": 24
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 768,
                                                    "start": 25,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 28
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "ident",
                                        "rawText": "ident",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 7
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 28
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 28
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 29
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 33,
                    "end": 35
                },
                "flags": 256,
                "start": 0,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "({ident: [foo, bar].join(\"\")}) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 30, end: 33

```

