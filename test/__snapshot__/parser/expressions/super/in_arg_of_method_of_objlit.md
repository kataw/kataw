# Kataw parser test case

## Input

`````js
x={ dsda(){ return async function(a=super.foo){} }}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "dsda",
                                        "rawText": "dsda",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 9,
                                        "end": 10
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
                                                        "start": 11,
                                                        "end": 18
                                                    },
                                                    "expression": {
                                                        "kind": 177,
                                                        "asyncKeyword": {
                                                            "kind": 82031,
                                                            "flags": 64,
                                                            "start": 18,
                                                            "end": 24
                                                        },
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "start": 24,
                                                            "end": 33
                                                        },
                                                        "generatorToken": null,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [
                                                                {
                                                                    "kind": 281,
                                                                    "ellipsisToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "start": 34,
                                                                        "end": 35
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 225,
                                                                            "superKeyword": {
                                                                                "kind": 4259935,
                                                                                "flags": 96,
                                                                                "start": 36,
                                                                                "end": 41
                                                                            },
                                                                            "flags": 96,
                                                                            "start": 36,
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
                                                                        "start": 36,
                                                                        "end": 45
                                                                    },
                                                                    "flags": 34,
                                                                    "start": 34,
                                                                    "end": 45
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 34,
                                                            "start": 33,
                                                            "end": 46
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "flags": 32,
                                                                "start": 47,
                                                                "end": 47
                                                            },
                                                            "flags": 32,
                                                            "start": 46,
                                                            "end": 48
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
                                                        "flags": 160,
                                                        "start": 18,
                                                        "end": 48
                                                    },
                                                    "flags": 80,
                                                    "start": 11,
                                                    "end": 48
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 11,
                                            "end": 48
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 50
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 3,
                        "end": 50
                    },
                    "flags": 48,
                    "start": 2,
                    "end": 51
                },
                "flags": 32,
                "start": 0,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "x={ dsda(){ return async function(a=super.foo){} }}",
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
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 36, end: 42

```

