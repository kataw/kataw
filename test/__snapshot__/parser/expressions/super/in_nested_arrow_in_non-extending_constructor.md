# Kataw parser test case

## Input

`````js
class x { constructor(){ return () => () => super.foo; }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                "kind": 134299649,
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
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 22,
                                "end": 23
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
                                                "start": 24,
                                                "end": 31
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 768,
                                                    "start": 34,
                                                    "end": 37
                                                },
                                                "typeParameters": null,
                                                "parameters": [],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 768,
                                                        "start": 40,
                                                        "end": 43
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncToken": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 768,
                                                                "start": 43,
                                                                "end": 49
                                                            },
                                                            "flags": 768,
                                                            "start": 43,
                                                            "end": 49
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 768,
                                                            "start": 50,
                                                            "end": 53
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 43,
                                                        "end": 53
                                                    },
                                                    "flags": 256,
                                                    "start": 37,
                                                    "end": 53
                                                },
                                                "flags": 256,
                                                "start": 31,
                                                "end": 53
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 24
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 54
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 56
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 56
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 56
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 57
            },
            "flags": 128,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "class x { constructor(){ return () => () => super.foo; }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

