# Kataw parser test case

## Input

`````js
class x extends y { constructor(){ return function() { return () => super.foo; } }}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 17
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 19,
                                "end": 31
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 268435488,
                            "start": 19,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 33
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 0,
                                        "start": 34,
                                        "end": 41
                                    },
                                    "expression": {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 0,
                                            "start": 41,
                                            "end": 50
                                        },
                                        "generatorToken": null,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 50,
                                            "end": 52
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 161,
                                                        "returnKeyword": {
                                                            "kind": 37757022,
                                                            "flags": 0,
                                                            "start": 54,
                                                            "end": 61
                                                        },
                                                        "expression": {
                                                            "kind": 271,
                                                            "arrowToken": {
                                                                "kind": 10,
                                                                "flags": 0,
                                                                "start": 64,
                                                                "end": 67
                                                            },
                                                            "typeParameters": null,
                                                            "parameters": [],
                                                            "asyncKeyword": null,
                                                            "returnType": null,
                                                            "contents": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 225,
                                                                    "superKeyword": {
                                                                        "kind": 4259935,
                                                                        "flags": 0,
                                                                        "start": 67,
                                                                        "end": 73
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 67,
                                                                    "end": 73
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 74,
                                                                    "end": 77
                                                                },
                                                                "flags": 536870944,
                                                                "start": 67,
                                                                "end": 77
                                                            },
                                                            "flags": 32,
                                                            "start": 61,
                                                            "end": 77
                                                        },
                                                        "flags": 16,
                                                        "start": 0,
                                                        "end": 54
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 54,
                                                "end": 78
                                            },
                                            "flags": 32,
                                            "start": 52,
                                            "end": 80
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 32,
                                        "start": 41,
                                        "end": 80
                                    },
                                    "flags": 16,
                                    "start": 0,
                                    "end": 34
                                }
                            ],
                            "flags": 16,
                            "start": 34,
                            "end": 80
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 82
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 82
            },
            "flags": 16,
            "start": 17,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "class x extends y { constructor(){ return function() { return () => super.foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 33, end: 34
✖ A return statement can only be used within a function_body - start: 34, end: 41
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 73, end: 74

```

