# Kataw parser test case

## Input

`````js
async function foo(a = class extends (await b) {}) {};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "typeParameters": null,
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
                            "start": 19,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "start": 22,
                                "end": 28
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 28,
                                        "end": 36
                                    },
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "start": 38,
                                                "end": 43
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 43,
                                                "end": 45
                                            },
                                            "flags": 32,
                                            "start": 38,
                                            "end": 45
                                        },
                                        "flags": 32,
                                        "start": 36,
                                        "end": 46
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 36,
                                    "end": 46
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 28,
                                "start": 32,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 49
                        },
                        "flags": 34,
                        "start": 19,
                        "end": 49
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 18,
                "end": 50
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 52,
                    "end": 52
                },
                "flags": 32,
                "start": 50,
                "end": 53
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 53
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 53,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "async function foo(a = class extends (await b) {}) {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 38, end: 43

```

