# Kataw parser test case

## Input

`````js
function x(a: | 1 | 2, b: & 3 & 4): number {}
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
                            "text": "a",
                            "rawText": "a",
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
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134217968,
                                        "text": 1,
                                        "flags": 2097216,
                                        "start": 15,
                                        "end": 17
                                    },
                                    {
                                        "kind": 134217968,
                                        "text": 2,
                                        "flags": 2097216,
                                        "start": 19,
                                        "end": 21
                                    }
                                ],
                                "flags": 2097152,
                                "start": 17,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 21
                        },
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 21
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 22,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": {
                                "kind": 134252103,
                                "flags": 64,
                                "start": 25,
                                "end": 27
                            },
                            "type": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 134217968,
                                        "text": 3,
                                        "flags": 2097216,
                                        "start": 27,
                                        "end": 29
                                    },
                                    {
                                        "kind": 134217968,
                                        "text": 4,
                                        "flags": 2097216,
                                        "start": 31,
                                        "end": 33
                                    }
                                ],
                                "flags": 2097152,
                                "start": 29,
                                "end": 33
                            },
                            "flags": 2097152,
                            "start": 25,
                            "end": 33
                        },
                        "right": null,
                        "flags": 32,
                        "start": 22,
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
                    "start": 44,
                    "end": 44
                },
                "flags": 32,
                "start": 42,
                "end": 45
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "start": 35,
                    "end": 42
                },
                "flags": 2097152,
                "start": 35,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function x(a: | 1 | 2, b: & 3 & 4): number {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

function x(): number {}
```

### Diagnostics

```javascript
✔ No errors
```

