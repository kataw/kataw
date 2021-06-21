# Kataw parser test case

## Input

`````js
function foo(a = [1 + 1]) { }

function bar(a = [1 + 1]) {
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 198,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 18,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 24
                        },
                        "flags": 34,
                        "start": 13,
                        "end": 24
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 12,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 27,
                    "end": 27
                },
                "flags": 32,
                "start": 25,
                "end": 29
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 29,
                "end": 39
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 39,
                "end": 43
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
                            "start": 44,
                            "end": 45
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 198,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 49,
                                            "end": 50
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 50,
                                            "end": 52
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 52,
                                            "end": 54
                                        },
                                        "flags": 32,
                                        "start": 49,
                                        "end": 54
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 49,
                                "end": 54
                            },
                            "flags": 32,
                            "start": 47,
                            "end": 55
                        },
                        "flags": 34,
                        "start": 44,
                        "end": 55
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 43,
                "end": 56
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "start": 58,
                    "end": 58
                },
                "flags": 32,
                "start": 56,
                "end": 60
            },
            "returnType": null,
            "flags": 16,
            "start": 29,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "function foo(a = [1 + 1]) { }\n\nfunction bar(a = [1 + 1]) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

 function foo() {
} function bar() {
} 
```

### Diagnostics

```javascript
✔ No errors
```

