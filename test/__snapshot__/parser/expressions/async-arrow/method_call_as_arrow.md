# Kataw parser test case

## Input

`````js
async ({ident: [foo, bar].join("")}) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
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
                                                            "start": 16,
                                                            "end": 19
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 768,
                                                            "start": 20,
                                                            "end": 24
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 16,
                                                    "end": 24
                                                },
                                                "flags": 256,
                                                "start": 14,
                                                "end": 25
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "join",
                                                "rawText": "join",
                                                "flags": 768,
                                                "start": 26,
                                                "end": 30
                                            },
                                            "flags": 256,
                                            "start": 8,
                                            "end": 30
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 768,
                                                    "start": 31,
                                                    "end": 33
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "flags": 256,
                                        "start": 8,
                                        "end": 34
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "ident",
                                        "rawText": "ident",
                                        "flags": 768,
                                        "start": 8,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 34
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 8,
                            "end": 34
                        },
                        "flags": 256,
                        "start": 7,
                        "end": 35
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 256,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 39,
                "end": 41
            },
            "flags": 128,
            "start": 39,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "async ({ident: [foo, bar].join(\"\")}) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 36, end: 39

```

