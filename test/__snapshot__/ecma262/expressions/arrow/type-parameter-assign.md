# Kataw parser test case

## Input

`````js
<A = B>(x) => {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 2
                                },
                                "type": null,
                                "assignToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 4
                                },
                                "defaultType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "B",
                                            "rawText": "B",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 6
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 6
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "flags": 2097152,
                    "transformFlags": 512,
                    "start": 0,
                    "end": 7
                },
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 13
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "<A = B>(x) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
<A= B>(x) => {};
```

### Diagnostics

```javascript
✔ No errors
```

