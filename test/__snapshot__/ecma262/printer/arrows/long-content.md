# Kataw parser test case


### Printer Options

`````js
{
  printWidth: 30,
}
`````

## Input

`````js
const foo = () => {
  expect(arg1, arg2, arg3).toEqual({message: 'test', messageType: 'SMS', status: 'Unknown', created: '11/01/2017 13:36'});
};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 13
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 17
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
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
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 19,
                                                            "end": 28
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "arg1",
                                                                    "rawText": "arg1",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 29,
                                                                    "end": 33
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "arg2",
                                                                    "rawText": "arg2",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 34,
                                                                    "end": 39
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "arg3",
                                                                    "rawText": "arg3",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 40,
                                                                    "end": 45
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 29,
                                                            "end": 45
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1,
                                                        "start": 19,
                                                        "end": 46
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "toEqual",
                                                        "rawText": "toEqual",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 47,
                                                        "end": 54
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 2,
                                                    "start": 19,
                                                    "end": 54
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
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "message",
                                                                            "rawText": "message",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 56,
                                                                            "end": 63
                                                                        },
                                                                        "right": {
                                                                            "kind": 201392131,
                                                                            "text": "test",
                                                                            "rawText": "'test'",
                                                                            "flags": 4194400,
                                                                            "transformFlags": 0,
                                                                            "start": 64,
                                                                            "end": 71
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 56,
                                                                        "end": 71
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "messageType",
                                                                            "rawText": "messageType",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 72,
                                                                            "end": 84
                                                                        },
                                                                        "right": {
                                                                            "kind": 201392131,
                                                                            "text": "SMS",
                                                                            "rawText": "'SMS'",
                                                                            "flags": 4194400,
                                                                            "transformFlags": 0,
                                                                            "start": 85,
                                                                            "end": 91
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 72,
                                                                        "end": 91
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "status",
                                                                            "rawText": "status",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 92,
                                                                            "end": 99
                                                                        },
                                                                        "right": {
                                                                            "kind": 201392131,
                                                                            "text": "Unknown",
                                                                            "rawText": "'Unknown'",
                                                                            "flags": 4194400,
                                                                            "transformFlags": 0,
                                                                            "start": 100,
                                                                            "end": 110
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 92,
                                                                        "end": 110
                                                                    },
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "created",
                                                                            "rawText": "created",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 111,
                                                                            "end": 119
                                                                        },
                                                                        "right": {
                                                                            "kind": 201392131,
                                                                            "text": "11/01/2017 13:36",
                                                                            "rawText": "'11/01/2017 13:36'",
                                                                            "flags": 4194400,
                                                                            "transformFlags": 0,
                                                                            "start": 120,
                                                                            "end": 139
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 111,
                                                                        "end": 139
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 56,
                                                                "end": 139
                                                            },
                                                            "flags": 48,
                                                            "transformFlags": 8,
                                                            "start": 55,
                                                            "end": 140
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 140
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 19,
                                                "end": 141
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 19,
                                            "end": 142
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 142
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 144
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 144
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 144
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 144
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 145
        }
    ],
    "isModule": false,
    "source": "const foo = () => {\n  expect(arg1, arg2, arg3).toEqual({message: 'test', messageType: 'SMS', status: 'Unknown', created: '11/01/2017 13:36'});\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 145
}
```

### Printed

```javascript
const foo = () => {
    expect(
      arg1,
      arg2,
      arg3
    ).toEqual({
      message: "'test'",
      messageType: "'SMS'",
      status: "'Unknown'",
      created:
        "'11/01/2017 13:36'"
    });
  };
```

### Diagnostics

```javascript
✔ No errors
```

