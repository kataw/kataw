# Kataw parser test case

## Input

`````js
async ([ [(a)] = [] ] = []) => {};
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 11,
                                                                "end": 12
                                                            },
                                                            "flags": 10,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 13
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 13
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 14
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 18,
                                                    "end": 18
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 8,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 19
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 21
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 23,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 7,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 27
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 30
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 32
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 33
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async ([ [(a)] = [] ] = []) => {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
async ([[(a)] = []] = []) => {};
```

### Diagnostics

```javascript
✔ No errors
```

