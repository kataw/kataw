# Kataw parser test case

## Input

`````js
class x { foo(){ function f(){ super.foo; } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
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
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 13
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 15
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "asyncToken": null,
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "f",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 28,
                                                "end": 29
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 225,
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 30,
                                                                    "end": 36
                                                                },
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "value": "foo",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 37,
                                                                    "end": 40
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 30,
                                                                "end": 40
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 30,
                                                            "end": 41
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 30,
                                                    "end": 41
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 29,
                                                "end": 43
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 16,
                                            "end": 43
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 43
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 45
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 13,
                            "end": 45
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 45
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 46
            },
            "flags": 128,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "class x { foo(){ function f(){ super.foo; } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 36,
            "end": 37
        }
    ],
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

