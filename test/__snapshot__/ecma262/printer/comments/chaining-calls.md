# Kataw parser test case

## Input

`````js
request
  .post('/version')  // comment 1
  .set('Prefer', 'plurality=singular') /* comment 2 */
  .send()
  .end((error, response) => {});
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
                            "kind": 129,
                            "member": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "request",
                                                "rawText": "request",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 0,
                                                "end": 7
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "post",
                                                "rawText": "post",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 15
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 0,
                                            "end": 15
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "/version",
                                                    "rawText": "'/version'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 16,
                                                    "end": 26
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 26
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 0,
                                        "end": 27
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 48
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 2,
                                    "start": 0,
                                    "end": 48
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "Prefer",
                                            "rawText": "'Prefer'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 57
                                        },
                                        {
                                            "kind": 201392131,
                                            "text": "plurality=singular",
                                            "rawText": "'plurality=singular'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 79
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 79
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 0,
                                "end": 80
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "send",
                                "rawText": "send",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 100,
                                "end": 104
                            },
                            "flags": 268435488,
                            "transformFlags": 2,
                            "start": 0,
                            "end": 104
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 105,
                            "end": 105
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 106
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "end",
                        "rawText": "end",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 110,
                        "end": 113
                    },
                    "flags": 268435488,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 113
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
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "error",
                                        "rawText": "error",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 115,
                                        "end": 120
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "response",
                                        "rawText": "response",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 121,
                                        "end": 130
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 115,
                                "end": 131
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 131,
                                "end": 134
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 136,
                                    "end": 136
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 134,
                                "end": 137
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 114,
                            "end": 137
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 114,
                    "end": 137
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 138
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 139
        }
    ],
    "isModule": false,
    "source": "request\n  .post('/version')  // comment 1\n  .set('Prefer', 'plurality=singular') /* comment 2 */\n  .send()\n  .end((error, response) => {});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 139
}
```

### Printed

```javascript
request.post("'/version'").set(
  "'Prefer'",
  "'plurality=singular'"
).send().end((error, response) => {});
```

### Diagnostics

```javascript
✔ No errors
```

