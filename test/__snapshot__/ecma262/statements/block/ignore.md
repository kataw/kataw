# Kataw parser test case

## Input

`````js
// kataw-ignore
{
function x() { { var f; var f } }
          }

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 26
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 28
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 29
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 38
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 38,
                                                                    "end": 40
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 38,
                                                                "end": 40
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 40
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 41
                                                },
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 45
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 45,
                                                                    "end": 47
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 45,
                                                                "end": 47
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 45,
                                                        "end": 47
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 47
                                                }
                                            ],
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 47
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 49
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 49
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 51
                        },
                        "returnType": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 51
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 17,
                "end": 51
            },
            "flags": 67108881,
            "transformFlags": 0,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "// kataw-ignore\n{\nfunction x() { { var f; var f } }\n          }\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
// kataw-ignore
{
function x() { { var f; var f } }
          }
```

### Diagnostics

```javascript
✔ No errors
```

