# Kataw parser test case

## Input

`````js
function foo (this : number, a : string, b) {}

function bar (this : number) {}

function baz (this : number, ...a) {}

`````

## Options

`````js
{ allowTypes : true }
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
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 27
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 27
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 14,
                        "end": 27
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 30
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 39
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 39
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 28,
                        "end": 39
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 42
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 42
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 45
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 43,
                "end": 46
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 46,
                "end": 56
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 56,
                "end": 60
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
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 66
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 75
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 75
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 62,
                        "end": 75
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 62,
                "end": 75
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 78
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 76,
                "end": 79
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 79
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 79,
                "end": 89
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "baz",
                "rawText": "baz",
                "flags": 96,
                "transformFlags": 0,
                "start": 89,
                "end": 93
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
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 99
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 101,
                                "end": 108
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 108
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 95,
                        "end": 108
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 109,
                            "end": 113
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 113,
                            "end": 114
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 109,
                        "end": 114
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 95,
                "end": 114
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 117,
                    "end": 117
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 115,
                "end": 118
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 79,
            "end": 118
        }
    ],
    "isModule": false,
    "source": "function foo (this : number, a : string, b) {}\n\nfunction bar (this : number) {}\n\nfunction baz (this : number, ...a) {}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 119
}
```

### Printed

```javascript
function foo(this: number, a: string, b) {}
function bar(this: number) {}

function baz(this: number, ...a) {}

```

### Diagnostics

```javascript
✔ No errors
```

