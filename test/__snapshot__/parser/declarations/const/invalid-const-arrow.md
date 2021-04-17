# Kataw parser test case

## Input

`````js
const fn: ( Object, Object Object ) => void = ( o1, o2, ) => o1;
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
            "kind": 162,
            "lexicalKeyword": null,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 768,
                            "start": 5,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134299649,
                                "text": "Object",
                                "rawText": "Object",
                                "flags": 768,
                                "start": 11,
                                "end": 18
                            },
                            "flags": 0,
                            "start": 8,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 5,
                        "end": 18
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "Object",
                            "rawText": "Object",
                            "flags": 768,
                            "start": 19,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 19,
                        "end": 26
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "Object",
                            "rawText": "Object",
                            "flags": 768,
                            "start": 26,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 26,
                        "end": 33
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 4259887,
                        "flags": 768,
                        "start": 38,
                        "end": 43
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 43,
                        "end": 43
                    },
                    "flags": 256,
                    "start": 38,
                    "end": 43
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 43,
                    "end": 45
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 57,
                        "end": 60
                    },
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 134299649,
                                "text": "o1",
                                "rawText": "o1",
                                "flags": 768,
                                "start": 47,
                                "end": 50
                            },
                            {
                                "kind": 134299649,
                                "text": "o2",
                                "rawText": "o2",
                                "flags": 768,
                                "start": 51,
                                "end": 54
                            }
                        ]
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "o1",
                        "rawText": "o1",
                        "flags": 768,
                        "start": 60,
                        "end": 63
                    },
                    "flags": 256,
                    "start": 45,
                    "end": 63
                },
                "flags": 256,
                "start": 38,
                "end": 63
            },
            "flags": 128,
            "start": 38,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "const fn: ( Object, Object Object ) => void = ( o1, o2, ) => o1;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 5
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 13,
            "error": "Missing initializer in const declaration",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 13,
            "error": "Missing initializer in const declaration",
            "start": 26,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 26,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 13,
            "error": "Missing initializer in const declaration",
            "start": 33,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 33,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 33,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 33,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 35,
            "end": 38
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 43,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 43,
            "end": 45
        }
    ],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

