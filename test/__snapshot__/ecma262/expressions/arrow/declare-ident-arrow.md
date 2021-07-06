# Kataw parser test case

## Input

`````js
declare => x;

declare => x, declare => x;

opaque => x;

opaque => x, opaque => x;

declare => x, declare(y);
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
                    "kind": 134299649,
                    "text": "declare",
                    "rawText": "declare",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "declare",
                            "rawText": "declare",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 22
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 25
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 27
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 27
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "declare",
                            "rawText": "declare",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 36
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 39
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 41
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 41
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "opaque",
                    "rawText": "opaque",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 50
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 53
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 55
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 42,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 42,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "opaque",
                            "rawText": "opaque",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 64
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 67
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 69
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 56,
                        "end": 69
                    },
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "opaque",
                            "rawText": "opaque",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 77
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 77,
                            "end": 80
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 82
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 82
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 56,
                "end": 82
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 56,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "declare",
                            "rawText": "declare",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 92
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 95
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 97
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 83,
                        "end": 97
                    },
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "declare",
                            "rawText": "declare",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 98,
                            "end": 106
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 107,
                                    "end": 108
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 107,
                            "end": 108
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 98,
                        "end": 109
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 83,
                "end": 109
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 83,
            "end": 110
        }
    ],
    "isModule": false,
    "source": "declare => x;\n\ndeclare => x, declare => x;\n\nopaque => x;\n\nopaque => x, opaque => x;\n\ndeclare => x, declare(y);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 110
}
```

### Printed

```javascript

declare => x;
declare => x, declare => x;

opaque => x;

opaque => x, opaque => x;

declare => x, declare(y);

```

### Diagnostics

```javascript
✔ No errors
```

