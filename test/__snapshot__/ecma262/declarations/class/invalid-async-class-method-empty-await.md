# Kataw parser test case

## Input

`````js
(class {async foo() { await }});
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
                    "name": null,
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 13
                                    },
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
                                            "start": 13,
                                            "end": 17
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 208,
                                                            "awaitKeyword": {
                                                                "kind": 82196,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 21,
                                                                "end": 27
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 27,
                                                                "end": 27
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 21,
                                                            "end": 27
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 27
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 29
                                        },
                                        "flags": 256,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 29
                                    },
                                    "flags": 256,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 29
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 29
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 30
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 30
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "(class {async foo() { await }});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 27, end: 29

```

