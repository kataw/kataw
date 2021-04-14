# Kataw parser test case

## Input

`````js
class x { fo(){ return function() { super.foo; } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "fo",
                                "rawText": "fo",
                                "flags": 768,
                                "start": 9,
                                "end": 12
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "type": null,
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
                                                "flags": 768,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "expression": {
                                                "kind": 177,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37814362,
                                                    "flags": 768,
                                                    "start": 22,
                                                    "end": 31
                                                },
                                                "generatorToken": null,
                                                "name": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
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
                                                                            "flags": 768,
                                                                            "start": 35,
                                                                            "end": 41
                                                                        },
                                                                        "flags": 768,
                                                                        "start": 35,
                                                                        "end": 41
                                                                    },
                                                                    "expression": {
                                                                        "kind": 81921,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 768,
                                                                        "start": 42,
                                                                        "end": 45
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 35,
                                                                    "end": 45
                                                                },
                                                                "flags": 128,
                                                                "start": 35,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 256,
                                                        "start": 35,
                                                        "end": 46
                                                    },
                                                    "flags": 256,
                                                    "start": 33,
                                                    "end": 48
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 256,
                                                "start": 22,
                                                "end": 48
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 15
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 48
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 50
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 50
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 50
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 51
            },
            "flags": 128,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "class x { fo(){ return function() { super.foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 41,
            "end": 42
        }
    ],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

