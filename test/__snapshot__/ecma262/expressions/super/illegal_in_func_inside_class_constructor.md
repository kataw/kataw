# Kataw parser test case

## Input

`````js
class x { constructor(){ function f(){ super[bar]; } }}
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 23
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
                                                    "start": 24,
                                                    "end": 33
                                                },
                                                "asteriskToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 35
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 36,
                                                    "end": 36
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
                                                                    "kind": 130,
                                                                    "member": {
                                                                        "kind": 4259935,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 38,
                                                                        "end": 44
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "bar",
                                                                        "rawText": "bar",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 45,
                                                                        "end": 48
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 4,
                                                                    "start": 38,
                                                                    "end": 49
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4096,
                                                                "start": 38,
                                                                "end": 50
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 50
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 52
                                                },
                                                "returnType": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 52
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 52
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 54
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 54
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 54
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 54
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "class x { constructor(){ function f(){ super[bar]; } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 38, end: 45

```

