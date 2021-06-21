# Kataw parser test case

## Input

`````js
function x(y: | z):
  |
  /* comment */
  () => number {}
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
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 15,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 17
                        },
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 56,
                    "end": 56
                },
                "flags": 32,
                "start": 54,
                "end": 57
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": {
                    "kind": 134251592,
                    "flags": 65,
                    "start": 19,
                    "end": 23
                },
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 43,
                        "end": 43
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 44,
                        "end": 47
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "start": 47,
                            "end": 54
                        },
                        "flags": 2097152,
                        "start": 47,
                        "end": 54
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 23,
                    "end": 54
                },
                "flags": 2097152,
                "start": 19,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "function x(y: | z):\n  |\n  /* comment */\n  () => number {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

 function x(): |  : number  {
} 
```

### Diagnostics

```javascript
✔ No errors
```

