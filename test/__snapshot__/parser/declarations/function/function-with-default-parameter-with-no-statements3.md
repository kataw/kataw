# Kataw parser test case

## Input

`````js
function foo(a = false) { }

function bar(a = false) {
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
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
                            "start": 13,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 205586437,
                            "flags": 96,
                            "start": 16,
                            "end": 22
                        },
                        "flags": 34,
                        "start": 13,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 12,
                "end": 23
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 25,
                    "end": 25
                },
                "flags": 32,
                "start": 23,
                "end": 27
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 27
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 27,
                "end": 37
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 37,
                "end": 41
            },
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
                            "start": 42,
                            "end": 43
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 205586437,
                            "flags": 96,
                            "start": 45,
                            "end": 51
                        },
                        "flags": 34,
                        "start": 42,
                        "end": 51
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 41,
                "end": 52
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "start": 54,
                    "end": 54
                },
                "flags": 32,
                "start": 52,
                "end": 56
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 27,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "function foo(a = false) { }\n\nfunction bar(a = false) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

function foo(a = false) {}
function bar(a = false) {}
```

### Diagnostics

```javascript
✔ No errors
```

