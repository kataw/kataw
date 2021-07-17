# Kataw parser test case

## Input

`````js
({ident: [foo, bar]/x/g}) => x
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
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
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
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 96,
                                                    "transformFlags": 32,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                "flags": 32,
                                                "transformFlags": 5120,
                                                "start": 2,
                                                "end": 21
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "flags": 96,
                                                "transformFlags": 32,
                                                "start": 21,
                                                "end": 22
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "flags": 32,
                                            "transformFlags": 5120,
                                            "start": 2,
                                            "end": 23
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 23
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 25
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 28
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "({ident: [foo, bar]/x/g}) => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 25, end: 28

```

