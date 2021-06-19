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
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
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
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": {
                                "kind": 134251592,
                                "flags": 64,
                                "start": 13,
                                "end": 15
                            },
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "name": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 15,
                                "end": 33
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 33
                        },
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 74,
                    "end": 74
                },
                "flags": 32,
                "start": 72,
                "end": 75
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": {
                    "kind": 134251592,
                    "flags": 65,
                    "start": 35,
                    "end": 39
                },
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 61,
                        "end": 61
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
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
                            "start": 65,
                            "end": 72
                        },
                        "flags": 2097152,
                        "start": 65,
                        "end": 72
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 39,
                    "end": 72
                },
                "flags": 2097152,
                "start": 35,
                "end": 72
            },
            "flags": 16,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "function x(y: | /* comment 1 */ z):\n  |\n  /* comment 2 */\n  () => number {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript

function x(): | /* comment 2 */
 {}
```

### Diagnostics

```javascript
✔ No errors
```

