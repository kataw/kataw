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

### Hybrid CST

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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134217968,
                                        "value": 1,
                                        "flags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    {
                                        "kind": 134217968,
                                        "value": 2,
                                        "flags": 0,
                                        "start": 19,
                                        "end": 21
                                    }
                                ],
                                "flags": 0,
                                "start": 17,
                                "end": 21
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 21
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 11,
                        "end": 21
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 22,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 134217968,
                                        "value": 3,
                                        "flags": 0,
                                        "start": 27,
                                        "end": 29
                                    },
                                    {
                                        "kind": 134217968,
                                        "value": 4,
                                        "flags": 0,
                                        "start": 31,
                                        "end": 33
                                    }
                                ],
                                "flags": 0,
                                "start": 29,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 24,
                            "end": 33
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 22,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 10,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 44,
                    "end": 44
                },
                "flags": 256,
                "start": 42,
                "end": 45
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 134234345,
                    "flags": 35,
                    "start": 512,
                    "end": 42
                },
                "flags": 0,
                "start": 34,
                "end": 42
            },
            "flags": 128,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "function x(a: | 1 | 2, b: & 3 & 4): number {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

