# Kataw parser test case

## Input

`````js
expect(() => {}).toTriggerReadyStateChanges([
  // Nothing.
]);

[1 /* first comment */, 2 /* second comment */, 3];
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
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "expect",
                            "rawText": "expect",
                            "flags": 96,
                            "start": 0,
                            "end": 6
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 8,
                                        "end": 8
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 9,
                                        "end": 12
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 14,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "start": 7,
                                    "end": 15
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 7,
                            "end": 15
                        },
                        "flags": 268435488,
                        "start": 0,
                        "end": 16
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "toTriggerReadyStateChanges",
                        "rawText": "toTriggerReadyStateChanges",
                        "flags": 96,
                        "start": 17,
                        "end": 43
                    },
                    "flags": 268435488,
                    "start": 0,
                    "end": 43
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 33,
                                "start": 45,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 44,
                            "end": 61
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 44,
                    "end": 61
                },
                "flags": 268435488,
                "start": 0,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 66,
                            "end": 67
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 88,
                            "end": 90
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 112,
                            "end": 114
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 66,
                    "end": 114
                },
                "flags": 33,
                "start": 63,
                "end": 115
            },
            "flags": 16,
            "start": 63,
            "end": 116
        }
    ],
    "isModule": false,
    "source": "expect(() => {}).toTriggerReadyStateChanges([\n  // Nothing.\n]);\n\n[1 /* first comment */, 2 /* second comment */, 3];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript

expect(() =>  {}).toTriggerReadyStateChanges([]);
[1 /* first comment */, 2 /* second comment */, 3];
```

### Diagnostics

```javascript
✔ No errors
```

