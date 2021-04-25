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
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 768,
                "start": 0,
                "end": 5
            },
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
                                "kind": 148,
                                "parameters": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Object",
                                            "rawText": "Object",
                                            "flags": 768,
                                            "start": 11,
                                            "end": 18
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 18
                                    }
                                ],
                                "returnType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 768,
                                        "start": 19,
                                        "end": 26
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 19,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 9,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 8,
                            "end": 26
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 5,
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
@{x2716}@ Unexpected token. - start: 19, end: 26
@{x2716}@ Unexpected token. - start: 19, end: 26
@{x2716}@ Missing initializer in const declaration - start: 26, end: 33
@{x2716}@ ',' expected - start: 26, end: 33
@{x2716}@ Missing initializer in const declaration - start: 33, end: 35
@{x2716}@ ',' expected - start: 33, end: 35
@{x2716}@ Unexpected token. - start: 33, end: 35
@{x2716}@ Statement expected - start: 33, end: 35
@{x2716}@ Statement expected - start: 35, end: 38
@{x2716}@ Expression expected - start: 43, end: 45
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 43, end: 45

```

