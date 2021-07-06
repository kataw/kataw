# Kataw parser test case

## Input

`````js
([ [(a)] = [] ] = []) => {}
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
                                                                "start": 5,
                                                                "end": 6
                                                            },
                                                            "flags": 4,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 7
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 4,
                                                    "end": 7
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2,
                                                "end": 8
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
                                                    "start": 12,
                                                    "end": 12
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 10,
                                                "end": 13
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 13
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 15
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
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 17,
                                "end": 20
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 21
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 24
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 27
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "([ [(a)] = [] ] = []) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
([[(a)] = []] = []) => {};
```

### Diagnostics

```javascript
✔ No errors
```

