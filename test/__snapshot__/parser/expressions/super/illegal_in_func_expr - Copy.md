# Kataw parser test case

## Input

`````js
x = function(){ super.foo; }
`````

## Output

### Hybrid CST

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
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 1,
                    "start": 512,
                    "end": 3
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 3,
                        "start": 0,
                        "end": 12
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 12,
                        "end": 14
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
                                                "flags": 15,
                                                "start": 0,
                                                "end": 21
                                            },
                                            "flags": 768,
                                            "start": 15,
                                            "end": 21
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "flags": 256,
                                        "start": 15,
                                        "end": 25
                                    },
                                    "flags": 128,
                                    "start": 15,
                                    "end": 26
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 15,
                            "end": 26
                        },
                        "flags": 256,
                        "start": 14,
                        "end": 28
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 3,
                    "end": 28
                },
                "flags": 256,
                "start": 0,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "x = function(){ super.foo; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 21, end: 22

```

