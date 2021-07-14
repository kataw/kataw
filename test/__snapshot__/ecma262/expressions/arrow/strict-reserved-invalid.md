# Kataw parser test case

## Input

`````js
package! => x

1**package! => x

+*package => !

new package => x

+package => x

!package => x
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
                "kind": 134299649,
                "text": "package",
                "rawText": "package",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 8
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 11,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "package",
                    "rawText": "package",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 25
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 13,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 26
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 25,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 31
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 34
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 34
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 34,
                        "end": 35
                    },
                    "right": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "package",
                            "rawText": "package",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 42
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 45
                        },
                        "contents": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 47
                            },
                            "operand": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 52
                                },
                                "expression": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "package",
                                        "rawText": "package",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 60
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 63
                                    },
                                    "contents": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 63,
                                            "end": 65
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 65,
                                            "end": 68
                                        },
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 134299649,
                                                "text": "package",
                                                "rawText": "package",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 68,
                                                "end": 75
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 75,
                                                "end": 78
                                            },
                                            "contents": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 78,
                                                "end": 80
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 68,
                                            "end": 80
                                        },
                                        "flags": 97,
                                        "transformFlags": 5120,
                                        "start": 63,
                                        "end": 80
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 80
                                },
                                "argumentList": null,
                                "flags": 97,
                                "transformFlags": 2048,
                                "start": 47,
                                "end": 80
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 80
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 80
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 34,
                    "end": 80
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 29,
                "end": 80
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 29,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 80,
                    "end": 83
                },
                "operand": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "package",
                        "rawText": "package",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 83,
                        "end": 90
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 90,
                        "end": 93
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 93,
                        "end": 95
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 95
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 80,
                "end": 95
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 80,
            "end": 95
        }
    ],
    "isModule": false,
    "source": "package! => x\n\n1**package! => x\n\n+*package => !\n\nnew package => x\n\n+package => x\n\n!package => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 95
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 7, end: 8
✖ Identifier expected - start: 8, end: 11
✖ Expected a `;` - start: 25, end: 26
✖ Identifier expected - start: 26, end: 29
✖ Identifier expected - start: 34, end: 35
✖ Expected a `;` - start: 35, end: 45
✖ Expected a `;` - start: 52, end: 63
✖ Expected a `;` - start: 68, end: 78

```

