# Kataw parser test case

## Input

`````js
function *f(){   s = {"foo": yield / x}   }
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
                "text": "f",
                "rawText": "f",
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
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "s",
                                    "rawText": "s",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "foo",
                                                    "rawText": "\"foo\"",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 27
                                                },
                                                "right": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 34
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 371,
                                                        "text": "/ x}   }",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 43
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 28,
                                                    "end": 43
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 22,
                                                "end": 43
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 43
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 20,
                                    "end": 43
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 14,
                                "end": 43
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 14,
                            "end": 43
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 43
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 43
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "function *f(){   s = {\"foo\": yield / x}   }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 34, end: 43
✖ ',' expected - start: 35, end: 43

```

