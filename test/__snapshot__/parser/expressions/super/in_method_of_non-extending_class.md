# Kataw parser test case

## Input

`````js
class x { fo(){ return function() { super.foo; } }}
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
                "flags": 80,
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
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "fo",
                                    "rawText": "fo",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 13,
                                    "end": 14
                                },
                                "returnType": null,
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
                                                    "flags": 80,
                                                    "start": 15,
                                                    "end": 22
                                                },
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 22,
                                                        "end": 31
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 31,
                                                        "end": 33
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 120,
                                                                    "expression": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 225,
                                                                            "superKeyword": {
                                                                                "kind": 4259935,
                                                                                "flags": 96,
                                                                                "start": 35,
                                                                                "end": 41
                                                                            },
                                                                            "flags": 96,
                                                                            "start": 35,
                                                                            "end": 41
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "start": 42,
                                                                            "end": 45
                                                                        },
                                                                        "flags": 536870944,
                                                                        "start": 35,
                                                                        "end": 45
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 35,
                                                                    "end": 46
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 35,
                                                            "end": 46
                                                        },
                                                        "flags": 32,
                                                        "start": 33,
                                                        "end": 48
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 48
                                                },
                                                "flags": 80,
                                                "start": 15,
                                                "end": 48
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 15,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "start": 14,
                                    "end": 50
                                },
                                "flags": 0,
                                "start": 12,
                                "end": 50
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 50
                },
                "flags": 7,
                "start": 32,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "class x { fo(){ return function() { super.foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 35, end: 42

```

