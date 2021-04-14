# Kataw parser test case

## Input

`````js
f(async foo=>c)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 11,
                                "end": 13
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 81921,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 7,
                                        "end": 11
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 11
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 2,
                                "end": 7
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 2304,
                            "start": 2,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "f(async foo=>c)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

