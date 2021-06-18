# Kataw parser test case

## Input

`````js
class A {async set foo(value) { }};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
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
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 9,
                                "end": 14
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 18,
                                    "end": 18
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 18,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 256,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 9,
                            "end": 18
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 28
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "start": 23,
                                    "end": 29
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 33
                                },
                                "flags": 0,
                                "start": 22,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 18,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 33
                },
                "flags": 7,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 34,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "class A {async set foo(value) { }};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'async' modifier cannot be used here - start: 18, end: 22
✖ Method definition expected - start: 19, end: 22

```

