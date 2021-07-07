# Kataw parser test case

## Input

`````js
class x { foo(){ function f(){ super.foo; } }}
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 15
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 16,
                                                    "end": 25
                                                },
                                                "asteriskToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 27
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 28
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
                                                                        "kind": 4259935,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 30,
                                                                        "end": 36
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 37,
                                                                        "end": 40
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2,
                                                                    "start": 30,
                                                                    "end": 40
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4096,
                                                                "start": 30,
                                                                "end": 41
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 41
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 43
                                                },
                                                "returnType": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 43
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 45
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 45
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 45
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "class x { foo(){ function f(){ super.foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 30, end: 37

```

