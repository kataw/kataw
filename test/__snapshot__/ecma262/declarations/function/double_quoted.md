# Kataw parser test case

## Input

`````js
function f(){ "use strict"; with (x) y; }
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 26
                        }
                    ],
                    "statements": [
                        {
                            "kind": 153,
                            "withKeyword": {
                                "kind": 37757029,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 32
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 35
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 36,
                                "end": 39
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 41
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "function f(){ \"use strict\"; with (x) y; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'with' statements are not allowed in strict mode. - start: 27, end: 32

```

