# Kataw parser test case

## Input

`````js
(x = a?.(yield)) => y
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 6,
                                    "end": 8
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 6
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 204,
                                        "chain": null,
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 9,
                                                    "end": 14
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 9,
                                            "end": 14
                                        },
                                        "flags": 268435488,
                                        "start": 8,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 1,
                    "end": 16
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 16,
                    "end": 19
                },
                "contents": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 34,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "(x = a?.(yield)) => y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

(x = a?.(yield)) => y;

```

### Diagnostics

```javascript
✔ No errors
```

