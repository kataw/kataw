# Kataw parser test case

## Input

`````js
var e: { (x: any): void } = function() { } // arity
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
                            "text": "e",
                            "rawText": "e",
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
                                                            "kind": 134234252,
                                                            "flags": 2097216,
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 16
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 16
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 16
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 138477615,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 23
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 23
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 25
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 25
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 36
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 40
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 42
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 42
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 42
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "var e: { (x: any): void } = function() { } // arity",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
var e: { (x: any): void } = function () {}; // arity

```

### Diagnostics

```javascript
✔ No errors
```

