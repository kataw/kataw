# Kataw parser test case

## Input

`````js
var g: { (x: Date): void } = (x) => { x * 2 } // param type (date < number)
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "Date",
                                                                "rawText": "Date",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 12,
                                                                "end": 17
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 17
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 17
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 17
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 138477615,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 24
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 24
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 26
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 26
                        },
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 32
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 35
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
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 39
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 96,
                                                    "transformFlags": 32,
                                                    "start": 39,
                                                    "end": 41
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 43
                                                },
                                                "flags": 96,
                                                "transformFlags": 5120,
                                                "start": 37,
                                                "end": 43
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 37,
                                            "end": 43
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 43
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 45
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 45
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 45
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "var g: { (x: Date): void } = (x) => { x * 2 } // param type (date < number)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
var g: { (x: Date): void } = (x) => {
    x * 2;
  };
```

### Diagnostics

```javascript
✔ No errors
```

