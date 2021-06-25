# Kataw parser test case

## Input

`````js
function foo(a = (v)) { }

function bar(a = (v)) {
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
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 18,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 34,
                        "start": 13,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 13,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 23,
                    "end": 23
                },
                "flags": 32,
                "start": 21,
                "end": 25
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 25,
                "end": 35
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 35,
                "end": 39
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
                            "start": 40,
                            "end": 41
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 45,
                                "end": 46
                            },
                            "flags": 32,
                            "start": 43,
                            "end": 47
                        },
                        "flags": 34,
                        "start": 40,
                        "end": 47
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 40,
                "end": 47
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "start": 50,
                    "end": 50
                },
                "flags": 32,
                "start": 48,
                "end": 52
            },
            "returnType": null,
            "flags": 16,
            "start": 25,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "function foo(a = (v)) { }\n\nfunction bar(a = (v)) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

function foo() {}
function bar() {}
```

### Diagnostics

```javascript
✔ No errors
```

