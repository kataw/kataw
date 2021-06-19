# Kataw parser test case

## Input

`````js
function foo(a = ``) { }

function bar(a = ``) {
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
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 134217824,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 34,
                        "start": 13,
                        "end": 19
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 12,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 22,
                    "end": 22
                },
                "flags": 32,
                "start": 20,
                "end": 24
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 24
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 24,
                "end": 34
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 34,
                "end": 38
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
                            "start": 39,
                            "end": 40
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 134217824,
                            "start": 42,
                            "end": 45
                        },
                        "flags": 34,
                        "start": 39,
                        "end": 45
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 38,
                "end": 46
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "start": 48,
                    "end": 48
                },
                "flags": 32,
                "start": 46,
                "end": 50
            },
            "returnType": null,
            "flags": 16,
            "start": 24,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "function foo(a = ``) { }\n\nfunction bar(a = ``) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
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

