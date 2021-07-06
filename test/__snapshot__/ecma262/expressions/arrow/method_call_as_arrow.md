# Kataw parser test case

## Input

`````js
({ident: [foo, bar].join("")}) => x
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "ident",
                                            "rawText": "ident",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 7
                                        },
                                        "value": {
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
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 10,
                                                                "end": 13
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "bar",
                                                                "rawText": "bar",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 14,
                                                                "end": 18
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 10,
                                                        "end": 18
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 8,
                                                    "start": 8,
                                                    "end": 19
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "join",
                                                    "rawText": "join",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 24
                                                },
                                                "flags": 32,
                                                "transformFlags": 2,
                                                "start": 2,
                                                "end": 24
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "",
                                                        "rawText": "\"\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 27
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 2,
                                            "end": 28
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 28
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 30
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 33
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 35
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "({ident: [foo, bar].join(\"\")}) => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 30, end: 33

```

