# Kataw parser test case

## Input

`````js
function fn() { (() => this)().#x }
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
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
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
                                "kind": 129,
                                "member": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 18
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 22
                                            },
                                            "contents": {
                                                "kind": 4276321,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 28
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "transformFlags": 1,
                                    "start": 15,
                                    "end": 30
                                },
                                "expression": {
                                    "kind": 67191035,
                                    "text": "#x",
                                    "rawText": "#x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 15,
                                "end": 33
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 15,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 33
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 35
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function fn() { (() => this)().#x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 31, end: 33

```

