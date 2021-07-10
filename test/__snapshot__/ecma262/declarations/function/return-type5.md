# Kataw parser test case

## Input

`````js
function x(y: | /* comment 1 */ z):
  |
  /* comment 2 */
  () => number {}
`````

## Options

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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": {
                                "kind": 134251592,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 33
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 33
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 11,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 33
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 74
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 72,
                "end": 75
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": {
                    "kind": 134251592,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 39
                },
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 61,
                        "end": 61
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 62,
                        "end": 65
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 72
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 72
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 72
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 35,
                "end": 72
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "function x(y: | /* comment 1 */ z):\n  |\n  /* comment 2 */\n  () => number {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
function x(y: | z): |
/* comment 2 */
() => number {}
```

### Diagnostics

```javascript
✔ No errors
```

