# Kataw parser test case

## Input

`````js
function foo(a = console.log) { }

function bar(a = console.log) {
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 13,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "console",
                                "rawText": "console",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 24
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "log",
                                "rawText": "log",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 16,
                            "end": 28
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 13,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 13,
                "end": 28
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 31
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 29,
                "end": 33
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 33,
                "end": 43
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 43,
                "end": 47
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
                            "transformFlags": 0,
                            "start": 48,
                            "end": 49
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "console",
                                "rawText": "console",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 59
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "log",
                                "rawText": "log",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 63
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 51,
                            "end": 63
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 48,
                        "end": 63
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 48,
                "end": 63
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 66
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 64,
                "end": 68
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 33,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "function foo(a = console.log) { }\n\nfunction bar(a = console.log) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
function foo(a = console.log) {}
function bar(a = console.log) {}

```

### Diagnostics

```javascript
✔ No errors
```

