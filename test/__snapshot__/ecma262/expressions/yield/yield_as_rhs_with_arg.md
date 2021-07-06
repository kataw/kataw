# Kataw parser test case

## Input

`````js
function *g() { function f(x = x + yield y) {}; }
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
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
                                "start": 15,
                                "end": 24
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 26
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 40
                                        },
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 40
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 27,
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
                            "start": 15,
                            "end": 46
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 47
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 47
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 49
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "function *g() { function f(x = x + yield y) {}; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 41, end: 42

```

