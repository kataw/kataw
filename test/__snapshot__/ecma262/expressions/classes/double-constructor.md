# Kataw parser test case

## Input

`````js
(class x {
  constructor () {}
  constructor () {}
})
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
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
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 24
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 2048,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 29
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 30
                                        },
                                        "flags": 2048,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 30
                                    },
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 30
                                },
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
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 44
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 2048,
                                            "transformFlags": 0,
                                            "start": 46,
                                            "end": 47
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 49
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 47,
                                            "end": 50
                                        },
                                        "flags": 2048,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 50
                                    },
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 50
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 50
                        },
                        "flags": 8,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 52
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 52
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "(class x {\n  constructor () {}\n  constructor () {}\n})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Multiple constructor implementations are not allowed - start: 50, end: 52

```

