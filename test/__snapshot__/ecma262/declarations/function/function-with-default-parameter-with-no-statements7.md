# Kataw parser test case

## Input

`````js
function foo(a = v[1 + 1]) { }

function bar(a = v[1 + 1]) {
}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 20
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 20,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 96,
                                "start": 19,
                                "end": 24
                            },
                            "flags": 536870944,
                            "start": 16,
                            "end": 25
                        },
                        "flags": 34,
                        "start": 13,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 13,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "start": 26,
                "end": 30
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 30
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 30,
                "end": 40
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 40,
                "end": 44
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 45,
                            "end": 46
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 48,
                                "end": 50
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 51,
                                    "end": 52
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 52,
                                    "end": 54
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 54,
                                    "end": 56
                                },
                                "flags": 96,
                                "start": 51,
                                "end": 56
                            },
                            "flags": 536870944,
                            "start": 48,
                            "end": 57
                        },
                        "flags": 34,
                        "start": 45,
                        "end": 57
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 45,
                "end": 57
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "start": 60,
                    "end": 60
                },
                "flags": 32,
                "start": 58,
                "end": 62
            },
            "returnType": null,
            "flags": 16,
            "start": 30,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "function foo(a = v[1 + 1]) { }\n\nfunction bar(a = v[1 + 1]) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

function foo(a = v[1 + 1]) {}
function bar(a = v[1 + 1]) {
}

```

### Diagnostics

```javascript
✔ No errors
```

