# Kataw parser test case

## Input

`````js
a ||= ((
      greeting = "hello", greeted = '"World"',
      silent = false,
      onMouseOver
      ) => new Foo({
      key: value,
}));
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4138,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 5
                },
                "right": {
                    "kind": 121,
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
                                        "text": "greeting",
                                        "rawText": "greeting",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 23
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 201392131,
                                        "text": "hello",
                                        "rawText": "\"hello\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 7,
                                    "end": 33
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "greeted",
                                        "rawText": "greeted",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 42
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 201392131,
                                        "text": "\"World\"",
                                        "rawText": "'\"World\"'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 54
                                    },
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 7,
                                    "end": 54
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "silent",
                                        "rawText": "silent",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 68
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 70,
                                        "end": 76
                                    },
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 7,
                                    "end": 76
                                },
                                {
                                    "kind": 134299649,
                                    "text": "onMouseOver",
                                    "rawText": "onMouseOver",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 77,
                                    "end": 95
                                }
                            ],
                            "trailingComma": false,
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 103
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 103,
                            "end": 106
                        },
                        "contents": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 106,
                                "end": 110
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "Foo",
                                "rawText": "Foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 110,
                                "end": 114
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
                                                        "text": "key",
                                                        "rawText": "key",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 116,
                                                        "end": 126
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "value",
                                                        "rawText": "value",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 127,
                                                        "end": 133
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 128,
                                                    "start": 116,
                                                    "end": 133
                                                }
                                            ],
                                            "trailingComma": true,
                                            "flags": 17,
                                            "transformFlags": 0,
                                            "start": 116,
                                            "end": 134
                                        },
                                        "flags": 49,
                                        "transformFlags": 8,
                                        "start": 115,
                                        "end": 136
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 115,
                                "end": 136
                            },
                            "flags": 96,
                            "transformFlags": 2048,
                            "start": 106,
                            "end": 137
                        },
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 137
                    },
                    "flags": 5,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 138
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 138
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 139
        }
    ],
    "isModule": false,
    "source": "a ||= ((\n      greeting = \"hello\", greeted = '\"World\"',\n      silent = false,\n      onMouseOver\n      ) => new Foo({\n      key: value,\n}));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 139
}
```

### Printed

```javascript
a ||=
  (
    (greeting = "\"hello\"",
    greeted = "'\"World\"'",
    silent = false,
    onMouseOver) => new Foo({
        key: value,
      })
  );
```

### Diagnostics

```javascript
✔ No errors
```

